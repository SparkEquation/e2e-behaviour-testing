/*
 * Copyright 2019 Spark Equation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import path from 'path';
import fs from 'fs';
import program from 'commander';
import { ProjectNames } from '../../config/projectNames';
import { generatePageObjects } from './pageObjectsImportsGenerator';

// webpack
declare const PACKAGE_VERSION: string;

const DEFAULT_CYPRESS_FEATURES_FOLDER = path.resolve(
    ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_FEATURES_SUBFOLER
);
const DEFAULT_PAGE_OBJECTS_FOLDER_NAME = ProjectNames.E2E_PAGE_OBJECTS_FOLDER;
const EXPECTED_CONFIG_PATH = path.resolve(ProjectNames.CYPRESS_CONFIG_FILE);
const FAULT_EXIT_CODE = 1;

function copyConfig(config): void {
    const configPath = path.resolve(config);
    try {
        fs.copyFileSync(configPath, EXPECTED_CONFIG_PATH);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('Config file do not exist');
        } else {
            console.error(err.message);
        }
        process.exit(FAULT_EXIT_CODE);
    }
}

function readConfig(): any {
    let configContent: any = null;
    try {
        configContent = JSON.parse(
            fs.readFileSync(EXPECTED_CONFIG_PATH, { encoding: 'utf-8' })
        );
    } catch (err) {
        console.error(err.message);
        process.exit(FAULT_EXIT_CODE);
    }
    return configContent;
}

function determinePageObjectsPath(cypressConfig: any): string {
    const { integrationFolder, pageObjectsFolder } = cypressConfig;
    if (pageObjectsFolder) {
        return path.resolve(pageObjectsFolder);
    }
    const integrationFolderPath = path.resolve(
        integrationFolder ? integrationFolder : DEFAULT_CYPRESS_FEATURES_FOLDER,
    );
    return path.resolve(integrationFolderPath, '..', DEFAULT_PAGE_OBJECTS_FOLDER_NAME);
}

program
    .version(PACKAGE_VERSION)
    .name('e2e-bdd-startup')
    .option('-c, --config <path>', 'path to cypress config')
    .parse(process.argv);

const config = program.config || ProjectNames.CYPRESS_CONFIG_FILE;

if (config !== ProjectNames.CYPRESS_CONFIG_FILE) {
    copyConfig(config);
}
const cypressConfig = readConfig();
const pageObjectsFolderPath = determinePageObjectsPath(cypressConfig);
try {
    const stats = fs.statSync(pageObjectsFolderPath);
    if (!stats.isDirectory()) {
        throw new Error('Page objects is not a directory');
    }
} catch (e) {
    console.error(e.message);
    process.exit(FAULT_EXIT_CODE);
}
generatePageObjects(pageObjectsFolderPath);
