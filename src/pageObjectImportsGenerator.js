const fs = require('fs');
const path = require('path');

// TODO add chokidar to automatically rearrange imports on change https://github.com/paulmillr/chokidar

const INDEX_FILENAME = 'index.ts';

// Filter only typescript and javascript page object files and not index file
const filesFilter = filename => filename.match(/\.(ts|js)$/) && filename !== INDEX_FILENAME;

//Remove extensions and encapsulate single quotes
const filesMap = filename => filename.slice(0, -3).replace(`'`, `\\'`);

// Create file with imports
const filesReduce = (acc, filename) => acc + `import './${filename}';\n`;

const pageObjectDirPath = path.resolve('cypress', 'integration', 'pageObject');

const fileNames = fs.readdirSync(pageObjectDirPath)
    .filter(filesFilter)
    .map(filesMap)
    .reduce(filesReduce, '');

fs.writeFileSync(path.resolve(pageObjectDirPath, 'index.ts'), fileNames);
