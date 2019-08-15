const fs = require('fs');
const path = require('path');

const integratedRepoBasePath = path.resolve(__dirname, '..', '..');

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

const cypressUIPath = path.resolve(integratedRepoBasePath, 'cypress', 'integration');
const cypressPageObjectsPath = path.resolve(cypressUIPath, 'pageObjects');
const gitignorePath = path.resolve(cypressPageObjectsPath, '.gitignore');
const gitignoreContent = `index.ts`;


if (!fs.existsSync(cypressUIPath)) {
	throw new Error('Install and run cypress first');
}

if (!fs.existsSync(cypressPageObjectsPath)) {
	fs.mkdirSync(path.resolve(cypressPageObjectsPath));
}


if(!fs.existsSync(gitignorePath)) {
	fs.writeFileSync(gitignorePath, gitignoreContent);
}
