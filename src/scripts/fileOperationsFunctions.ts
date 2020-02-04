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
import { IFilesToCopy } from '../../config/prepareFilesToCopy';

// webpack
declare const PACKAGE_NAME: string;

export function copyFile(from: string, to: string, replaceExisting: boolean): void {
    const copyFlags = replaceExisting ? undefined : fs.constants.COPYFILE_EXCL;
    try {
        fs.copyFileSync(from, to, copyFlags);
    } catch (e) {
        if (e.code !== 'EEXIST' && !replaceExisting) {
            console.warn(`${PACKAGE_NAME.toUpperCase()}: Warning:
              Cannot copy file, details:
            ${e}`);
        }
    }
}

export function createDirectoryIfNotExists(dirPath: string): void {
    if(!fs.existsSync(dirPath)) {
        try {
            fs.mkdirSync(dirPath, { recursive: true });
        } catch (e) {
            console.warn(`${PACKAGE_NAME.toUpperCase()}: Warning:
              Cannot create directory, details:
            ${e}`);
        }
    }
}

export function copyNecessaryFiles(filesList: Array<IFilesToCopy>, replaceExisting = false): void {
    filesList.forEach(({ from, to }) => {
        copyFile(from, to, replaceExisting);
    });
}

export function createNecessaryDirectories(directoriesList: Array<string>): void {
    directoriesList.forEach(directory => {
        createDirectoryIfNotExists(directory);
    });
}
