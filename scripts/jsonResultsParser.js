#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const testResults = new Map();

const logsPath = path.resolve('cypress', 'cucumber-json');

const processTags = (tags, result) => {
    tags.map(tagInfo => tagInfo.name)
        .filter(tag => tag.charAt(0) === '@')
        .map(tag => tag.slice(1))
        .forEach(tag => {
            if (! testResults.has(tag)) {
                testResults.set(tag, result);
            } else {
                console.error(`Duplicate tag @${tag}`)
            }
        });
};

fs.readdirSync(logsPath)
    .filter(filename => path.extname(filename) === '.json')
    .map(filename => JSON.parse(
        fs.readFileSync(
            path.resolve(logsPath, filename), { encoding: 'utf-8' }
        ))
    ).forEach(featuresArray => {
        featuresArray.forEach(feature => {
            feature.elements.forEach(element => {
                if (element.keyword !== 'Scenario') {
                    return;
                }
                element.result = {
                    type: 'Scenario'
                };
                if (element.steps.length === 0 || element.steps[0].result.status === 'skipped') {
                    element.result.status = 'skipped';
                } else {
                    element.result.status = element.steps.some(
                        step => step.result.status === 'failed'
                    ) ? 'failed' : 'success';
                }
                processTags(element.tags, element.result);
            });
        })
    });

console.log(testResults);
const rawResults = Array.from(testResults.values());

console.log(`Success: ${rawResults.filter(result => result.status === 'success').length}`);
console.log(`Failed: ${rawResults.filter(result => result.status === 'failed').length}`);
console.log(`Skipped: ${rawResults.filter(result => result.status === 'skipped').length}`);
