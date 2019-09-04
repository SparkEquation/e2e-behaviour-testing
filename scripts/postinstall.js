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
const projectIntegrationPath = path.resolve(projectPath, 'integration');
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
const TSCONFIG_FILE = 'tsconfig.json';
const CYPRESS_ENV_FILE = 'cypress.env.json.template'

const filesToCopy = [
	// GitIgnore file
	{
		from: path.resolve(ownPreInstallPath, `template${GITIGNORE_FILE}`),
		to: path.resolve(projectPageObjectsPath, GITIGNORE_FILE)
	},
	// Plugin file
	{
		from: path.resolve(ownPreInstallPath, `${PLUGIN_FILE}.template`),
		to: path.resolve(projectPluginsPath, PLUGIN_FILE)
	},
	// Common file to run before tests
	{
		from: path.resolve(ownPreInstallPath, `${TESTS_COMMON}.template`),
		to: path.resolve(projectTestsCommonPath, TESTS_COMMON)
	},
	// Cypress-cucumber-preprocessor config
	{
		from: path.resolve(ownPreInstallPath, `template${CYPRESS_CUCUMBER_CONFIG}`),
		to: path.resolve(projectPath, CYPRESS_CUCUMBER_CONFIG)
	},
	// Cypress config
	{
		from: path.resolve(CYPRESS_CONFIG),
		to: path.resolve(projectPath, CYPRESS_CONFIG)
	},
	// TS config
	{
		from: path.resolve(ownPreInstallPath, `${TSCONFIG_FILE}.template`),
		to: path.resolve(projectIntegrationPath, TSCONFIG_FILE)
	},
	// support/index
	{
		from: path.resolve(ownPreInstallPath, `${SUPPORT_FILE}.template`),
		to: path.resolve(projectSupportPath, SUPPORT_FILE)
	},
	// credentials template
	{
		from: path.resolve(ownPreInstallPath, CYPRESS_ENV_FILE),
		to: path.resolve(projectPath, CYPRESS_ENV_FILE),
	},
];

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
			console.warn(`UI-TESTING-CYPRESS: Warning:
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
			console.warn(`UI-TESTING-CYPRESS: Warning:
			Cannot copy file, details:
			${e}`);
		}
	}
}

