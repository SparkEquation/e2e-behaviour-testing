#!/usr/bin/env node

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
const posixPath = path.posix;

// TODO add chokidar to automatically rearrange imports on change https://github.com/paulmillr/chokidar

const INDEX_FILENAME = 'index.ts';
// Max depth of page objects files
const MAX_DEPTH = 10;
const AVAILABLE_EXTENSIONS = ['.js', '.ts'];

//Remove extensions and encapsulate single quotes
const filesMap = filename => filename.slice(0, -3).replace(`'`, `\\'`);

// Create file with imports
const filesReduce = (acc, filename) => acc + `import '${filename}';\n`;

function getFiles(pageObjectsPath, nestedPath = '.') {
  const files = fs.readdirSync(
    path.resolve(pageObjectsPath, nestedPath),
    { withFileTypes: true }
  );

  return files.map(dirent => {
    if (dirent.isDirectory()) {
      return getFiles(pageObjectsPath, path.join(nestedPath, dirent.name));
    }
    return path.join(nestedPath, dirent.name);
  })
    .flat(MAX_DEPTH);
}

const pageObjectDirPath = path.resolve('integration', 'pageObjects');

const files = getFiles(pageObjectDirPath)
  .filter(
    filePath => AVAILABLE_EXTENSIONS.includes(path.extname(filePath)) && filePath !== INDEX_FILENAME
  )
  .map(filesMap)
  .map(file => {
    return `./${posixPath.join(...file.split(path.sep))}`;
  });

const importContent = files.reduce(filesReduce, '');

fs.writeFileSync(path.resolve(pageObjectDirPath, 'index.ts'), importContent);
