const fs = require('fs');
const path = require('path');

const integratedRepoBasePath = path.resolve(__dirname, '..', '..');
const localCypressPath = path.resolve('.', 'cypress');
const integratedCypressPath = path.resolve(integratedRepoBasePath, 'cypress');
const cypressUIPath = path.resolve(integratedCypressPath, 'integration');
const cypressPageObjectsPath = path.resolve(cypressUIPath, 'pageObjects');

checkCypressIsInstalled();

createPageObjectsDirectory();

setCypressConfigIfEmpty();

createGitignore();

copyPluginsFile();

copyTsConfig();


function setCypressConfigIfEmpty() {
	const cypressConfigPath = path.resolve(integratedRepoBasePath, 'cypress.json');
	let cypressConfig;

	try {
		cypressConfig = require(cypressConfigPath);
	} catch (err) {
		cypressConfig = {};
	}

	if (Object.keys(cypressConfig).length === 0) {
		fs.copyFileSync(path.resolve('cypress.json'), cypressConfigPath)
	}
}

function createGitignore() {
	copyIfNotExist(
		path.resolve('.', 'preinstall', 'example.gitignore'),
		path.resolve(cypressPageObjectsPath, '.gitignore'),
	);
}

function copyTsConfig() {
	const filename = 'tsconfig.json';
	copyIfNotExist(
		path.resolve('.', filename),
		path.resolve(integratedCypressPath, filename)
	)
}

function copyPluginsFile() {
	const filename = 'generated.js';
	copyIfNotExist(
		path.resolve(localCypressPath, 'plugins', filename),
		path.resolve(integratedCypressPath, 'plugins', filename)
	);
}

function checkCypressIsInstalled() {
	if (!fs.existsSync(cypressUIPath)) {
		throw new Error('Install and run cypress first');
	}
}

function createPageObjectsDirectory() {
	if (!fs.existsSync(cypressPageObjectsPath)) {
		fs.mkdirSync(path.resolve(cypressPageObjectsPath));
	}
}

function copyIfNotExist(from, to) {
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

