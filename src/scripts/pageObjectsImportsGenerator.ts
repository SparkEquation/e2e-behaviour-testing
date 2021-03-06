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

import fs from 'fs';
import path from 'path';
import { ProjectNames } from '../../config/projectNames';
import { readdirSync } from 'readdir-withfiletypes';

const posixPath = path.posix;
// Max depth of page objects files
const MAX_DEPTH = 10;
const AVAILABLE_EXTENSIONS = ['.js', '.ts'];

//Remove extensions and encapsulate single quotes
const filesMap = (filename: string): string => filename.slice(0, -3).replace(`'`, `\\'`);

// Create file with imports
const filesReduce = (acc, filename): string => acc + `import '${filename}';\n`;

function getFiles(pageObjectsPath, nestedPath = '.'): Array<string> {
    const files = readdirSync(
        path.resolve(pageObjectsPath, nestedPath),
        { withFileTypes: true }
    );

    return files
        .map(dirent => {
            if (dirent.isDirectory()) {
                return getFiles(pageObjectsPath, path.join(nestedPath, dirent.name));
            }
            return path.join(nestedPath, dirent.name);
        })
        .flat(MAX_DEPTH);
}

export const generatePageObjects = (pageObjectDirPath: string): void => {
    const files = getFiles(pageObjectDirPath)
        .filter(
            filePath => AVAILABLE_EXTENSIONS.includes(
                path.extname(filePath)
            ) && filePath !== ProjectNames.TESTS_INDEX_FILE
        )
        .map(filesMap)
        .map(file => {
            return `./${ posixPath.join(...file.split(path.sep)) }`;
        });

    const importContent = files.reduce(filesReduce, '');

    fs.writeFileSync(path.resolve(pageObjectDirPath, 'index.ts'), importContent);
};
