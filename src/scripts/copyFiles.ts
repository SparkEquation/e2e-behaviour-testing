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

import path from 'path';
import inquirer from 'inquirer';
import { ProjectNames } from '../../config/projectNames';
import { copyNecessaryFiles, createNecessaryDirectories } from './fileOperationsFunctions';
import { prepareDirectoriesToCreate, prepareSavedFilesToCopy } from '../../config/prepareFilesToCopy';

// webpack
declare const PACKAGE_NAME: string;

// Paths for project where this library is being installed
const PROJECT_BASE_PATH = path.resolve();
const LIBRARY_TEMPLATES_PATH = path.resolve('node_modules', PACKAGE_NAME, ProjectNames.POSTINSTALL_FOLDER);

const filesToCopy = prepareSavedFilesToCopy(PROJECT_BASE_PATH, LIBRARY_TEMPLATES_PATH);
const directoriesToCreate = prepareDirectoriesToCreate(PROJECT_BASE_PATH);

const choices = [
	{
		name: 'Copy all files',
		value: 'all'
	},
	{
		name: 'Copy files interactively',
		value: 'interactive'
	}
];

inquirer.prompt([
	{
		type: 'list',
		name: 'way',
		message: 'How do you want to copy files?',
		choices
	},
	{
		type: 'confirm',
		name: 'shouldReplaceExisting',
		message: 'Do you want to replace the existing files?',
		default: false,
		when: ({ way }) => {
			return way === 'all';
		}
	}
]).then(({ way, shouldReplaceExisting }) => {
	if (way === 'interactive') {
		console.error('Not implemented yet. Vote for it in github repo');
		return;
	}
	createNecessaryDirectories(directoriesToCreate);
	copyNecessaryFiles(filesToCopy, shouldReplaceExisting);
});
