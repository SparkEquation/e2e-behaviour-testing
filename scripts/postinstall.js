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

const fs = require('fs');
const path = require('path');

// TODO deal with postinstall script being run on local install
const isDependency = path.basename(path.resolve('..')) === 'node_modules';
if (!isDependency) {
	process.exit(0);
}

// Paths for project where this library is being installed
const projectPath = path.resolve('..', '..');
const projectIntegrationPath = path.resolve(projectPath, 'e2e');
const projectPluginsPath = path.resolve(projectIntegrationPath, 'plugins');
const projectPageObjectsPath = path.resolve(projectIntegrationPath, 'pageObjects');
const projectTestsCommonPath = path.resolve(projectIntegrationPath, 'features', 'common');
const projectSupportPath = path.resolve(projectIntegrationPath, 'support');

// Paths for local copy of this library in node_modules
const ownPreInstallPath = path.resolve('postinstall');

// Filenames constants
const PLUGIN_FILE = 'plugins.js';
const GITIGNORE_FILE = '.gitignore';
const CYPRESS_CONFIG = 'cypress.json';
const SUPPORT_FILE = 'support.js';
const CYPRESS_CUCUMBER_CONFIG = '.cypress-cucumber-preprocessorrc';
const TESTS_COMMON = 'globalBefore.ts';
const TSCONFIG_FILE = 'tsconfig.common.json';
const CYPRESS_ENV_FILE = 'cypress.env.json';

const filesToCopy = [
	// GitIgnore file
	{
		resultDir: path.resolve(projectPageObjectsPath),
		name: GITIGNORE_FILE,
	},
	// Plugin file
	{
		resultDir: path.resolve(projectPluginsPath),
		name: PLUGIN_FILE,
	},
	// Common file to run before tests
	{
		resultDir: path.resolve(projectTestsCommonPath),
		name: TESTS_COMMON,
	},
	// Cypress-cucumber-preprocessor config
	{
		resultDir: path.resolve(projectPath),
		name: CYPRESS_CUCUMBER_CONFIG,
	},
	// Cypress config
	{
		resultDir: path.resolve(projectPath),
		name: CYPRESS_CONFIG,
	},
	// TS config
	{
		resultDir: path.resolve(projectIntegrationPath),
		name: TSCONFIG_FILE,
		outputName: 'tsconfig.json'
	},
	// support/index
	{
		resultDir: path.resolve(projectSupportPath),
		name: SUPPORT_FILE,
	},
	// credentials template
	{
		resultDir: path.resolve(projectPath),
		name: CYPRESS_ENV_FILE,
	},
].map(fileInfo => ({
	from: path.resolve(ownPreInstallPath, `example.${fileInfo.name}.template`),
	to: path.resolve(fileInfo.resultDir, (fileInfo.outputName || fileInfo.name))
}));

createNecessaryDirectories();

copyNecessaryFiles();

function copyNecessaryFiles() {
	filesToCopy.forEach(({from, to}) => {
		copyIfNotExists(from, to);
	})
}

function createNecessaryDirectories () {
	[projectPluginsPath, projectPageObjectsPath, projectTestsCommonPath, projectSupportPath].forEach(directory => {
		createDirectoryIfNotExists(directory);
	})
}

function createDirectoryIfNotExists (dirPath) {
	if(!fs.existsSync(dirPath)) {
		try {
			fs.mkdirSync(dirPath, {recursive: true});
		} catch (e) {
			console.warn(`E2E-BEHAVIOUR-TESTING: Warning:
			Cannot create directory, details:
			${e}`);
		}
	}
}

function copyIfNotExists(from, to) {
	try {
		fs.copyFileSync(from, to, fs.constants.COPYFILE_EXCL);
	} catch (e) {
		if (e.code !== 'EEXIST') {
			console.warn(`E2E-BEHAVIOUR-TESTING: Warning:
			Cannot copy file, details:
			${e}`);
		}
	}
}

