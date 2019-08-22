const fs = require('fs');
const path = require('path');

// TODO deal with preinstall script being run on local install
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
const ownIntegrationPath = path.resolve('integration');
const ownPreInstallPath = path.resolve('preinstall');
const ownPageObjectsPath = path.resolve(ownIntegrationPath, 'pageObjects');
const ownSupportPath = path.resolve(ownIntegrationPath, 'support');

// Filenames constants
const PLUGIN_FILE = 'generated.js';
const GITIGNORE_FILE = '.gitignore';
const CYPRESS_CONFIG = 'cypress.json';
const SUPPORT_FILE = 'index.js';
const CYPRESS_CUCUMBER_CONFIG = '.cypress-cucumber-preprocessorrc';
const TESTS_COMMON = 'globalBefore.ts';
const TSCONFIG_FILE = 'tsconfig.json';

const filesToCopy = [
	// GitIgnore file
	{
		from: path.resolve(ownPageObjectsPath, `template${GITIGNORE_FILE}`),
		to: path.resolve(projectPageObjectsPath, GITIGNORE_FILE)
	},
	// Plugin file
	{
		from: path.resolve(ownIntegrationPath, 'plugins', PLUGIN_FILE),
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
		from: path.resolve(TSCONFIG_FILE),
		to: path.resolve(projectIntegrationPath, TSCONFIG_FILE)
	},
	// support/index
	{
		from: path.resolve(ownSupportPath, SUPPORT_FILE),
		to: path.resolve(projectSupportPath, SUPPORT_FILE)
	}
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

