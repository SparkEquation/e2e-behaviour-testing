const fs = require('fs');
const path = require('path');

const integratedRepoBasePath = path.resolve(__dirname, '..', '..');
const cypressPageObjectsPath = path.resolve(integratedRepoBasePath, 'cypress', 'integration', 'pageObjects');
const gitignorePath = path.resolve(cypressPageObjectsPath, '.gitignore');
const gitignoreContent = `index.ts`;

fs.mkdirSync(path.resolve(cypressPageObjectsPath), { recursive: true });

if(!fs.existsSync(gitignorePath)) {
    fs.writeFileSync(gitignorePath, gitignoreContent);
}
