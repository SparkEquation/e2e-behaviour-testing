const fs = require('fs');
const path = require('path');

const integratedRepoBasePath = path.resolve(__dirname, '..', '..');
const cypressUIPath = path.resolve(integratedRepoBasePath, 'cypress', 'integration');
const cypressPageObjectsPath = path.resolve(cypressUIPath, 'pageObjects');

checkCypressIsInstalled();

createPageObjectsDirectory();

setCypressConfigIfEmpty();

createGitignore();

copyPluginsFile();


function setCypressConfigIfEmpty () {
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

function createGitignore () {
	copyIfNotExist(
		path.resolve('.', 'preinstall', 'example.gitignore'),
		path.resolve(cypressPageObjectsPath, '.gitignore'),
	);
}

function copyPluginsFile() {
	copyIfNotExist(
		path.resolve('.', 'cypress', 'plugins', 'generated.js'),
		path.resolve(cypressUIPath, '..', 'plugins')
	);
}

function checkCypressIsInstalled () {
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
		console.warn(e);
	}
}

