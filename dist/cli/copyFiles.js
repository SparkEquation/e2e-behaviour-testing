#!/usr/bin/env node
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/copyFiles.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/prepareFilesToCopy.ts":
/*!**************************************!*\
  !*** ./config/prepareFilesToCopy.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));

const postinstallFilenamesConvertor_1 = __webpack_require__(/*! ../src/util/postinstallFilenamesConvertor */ "./src/util/postinstallFilenamesConvertor.ts");

const projectNames_1 = __webpack_require__(/*! ./projectNames */ "./config/projectNames.ts");

function prepareFilesToSave() {
  return [{
    path: path_1.default.resolve(projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_PLUGINS_SUBFOLDER),
    name: projectNames_1.ProjectNames.E2E_PLUGINS_FILE
  }, {
    path: path_1.default.resolve(projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_SUPPORT_SUBFOLER),
    name: projectNames_1.ProjectNames.E2E_SUPPORT_FILE
  }, {
    path: path_1.default.resolve(projectNames_1.ProjectNames.CONFIG_FOLDER),
    name: projectNames_1.ProjectNames.E2E_TSCONFIG_FILE
  }, {
    path: path_1.default.resolve(projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_PAGE_OBJECTS_FOLDER),
    name: projectNames_1.ProjectNames.GITIGNORE_FILE
  }, {
    path: path_1.default.resolve(projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_PAGE_OBJECTS_FOLDER),
    name: projectNames_1.ProjectNames.GITIGNORE_FILE
  }, {
    path: path_1.default.resolve(projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_CONFIG_SUBFOLDER),
    name: projectNames_1.ProjectNames.CYPRESS_INTEGRATION_CONFIG_FILE
  }, {
    path: path_1.default.resolve(projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_CONFIG_SUBFOLDER),
    name: projectNames_1.ProjectNames.CYPRESS_UNIT_CONFIG_FILE
  }].map(fileInfo => ({
    from: path_1.default.resolve(fileInfo.path, fileInfo.name),
    to: path_1.default.resolve(projectNames_1.ProjectNames.POSTINSTALL_FOLDER, postinstallFilenamesConvertor_1.filenameToPostInstallEntry(fileInfo.name))
  }));
}

exports.prepareFilesToSave = prepareFilesToSave;

function prepareSavedFilesToCopy(projectBasePath, libraryTemplatesPath) {
  return [{
    resultDir: path_1.default.resolve(projectBasePath, projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_PAGE_OBJECTS_FOLDER),
    name: projectNames_1.ProjectNames.GITIGNORE_FILE
  }, {
    resultDir: path_1.default.resolve(projectBasePath, projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_PLUGINS_SUBFOLDER),
    name: projectNames_1.ProjectNames.E2E_PLUGINS_FILE
  }, {
    resultDir: path_1.default.resolve(projectBasePath, projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_FEATURES_SUBFOLER, projectNames_1.ProjectNames.E2E_FEATURES_COMMON_SUBFOLDER),
    name: projectNames_1.ProjectNames.E2E_FEATURES_COMMON_BEFORE_FILE
  }, {
    resultDir: path_1.default.resolve(projectBasePath),
    name: projectNames_1.ProjectNames.CYPRESS_CUCUMBER_CONFIG_FILE
  }, {
    resultDir: path_1.default.resolve(projectBasePath, projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_CONFIG_SUBFOLDER),
    name: projectNames_1.ProjectNames.CYPRESS_INTEGRATION_CONFIG_FILE
  }, {
    resultDir: path_1.default.resolve(projectBasePath, projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_CONFIG_SUBFOLDER),
    name: projectNames_1.ProjectNames.CYPRESS_UNIT_CONFIG_FILE
  }, {
    resultDir: path_1.default.resolve(projectBasePath, projectNames_1.ProjectNames.E2E_TESTS_FOLDER),
    name: projectNames_1.ProjectNames.E2E_TSCONFIG_FILE,
    outputName: projectNames_1.ProjectNames.OUTPUT_TSCONFIG_FILE
  }, {
    resultDir: path_1.default.resolve(projectBasePath, projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_SUPPORT_SUBFOLER),
    name: projectNames_1.ProjectNames.E2E_SUPPORT_FILE
  }, {
    resultDir: path_1.default.resolve(projectBasePath),
    name: projectNames_1.ProjectNames.CYPRESS_ENV_FILE
  }].map(fileInfo => ({
    from: path_1.default.resolve(libraryTemplatesPath, postinstallFilenamesConvertor_1.filenameToPostInstallEntry(fileInfo.name)),
    to: path_1.default.resolve(fileInfo.resultDir, fileInfo.outputName || fileInfo.name)
  }));
}

exports.prepareSavedFilesToCopy = prepareSavedFilesToCopy;

function prepareDirectoriesToCreate(projectBasePath) {
  const PROJECT_E2E_PATH = path_1.default.resolve(projectBasePath, projectNames_1.ProjectNames.E2E_TESTS_FOLDER);
  const PROJECT_PLUGINS_PATH = path_1.default.resolve(PROJECT_E2E_PATH, projectNames_1.ProjectNames.E2E_PLUGINS_SUBFOLDER);
  const PROJECT_SUPPORT_PATH = path_1.default.resolve(PROJECT_E2E_PATH, projectNames_1.ProjectNames.E2E_SUPPORT_SUBFOLER);
  const PROJECT_PAGE_OBJECTS_PATH = path_1.default.resolve(PROJECT_E2E_PATH, projectNames_1.ProjectNames.E2E_PAGE_OBJECTS_FOLDER);
  const PROJECT_TESTS_COMMON_PATH = path_1.default.resolve(PROJECT_E2E_PATH, projectNames_1.ProjectNames.E2E_FEATURES_SUBFOLER, projectNames_1.ProjectNames.E2E_FEATURES_COMMON_SUBFOLDER);
  const PROJECT_E2E_CONFIG_PATH = path_1.default.resolve(PROJECT_E2E_PATH, projectNames_1.ProjectNames.E2E_CONFIG_SUBFOLDER);
  return [PROJECT_PLUGINS_PATH, PROJECT_SUPPORT_PATH, PROJECT_PAGE_OBJECTS_PATH, PROJECT_TESTS_COMMON_PATH, PROJECT_E2E_CONFIG_PATH];
}

exports.prepareDirectoriesToCreate = prepareDirectoriesToCreate;

/***/ }),

/***/ "./config/projectNames.ts":
/*!********************************!*\
  !*** ./config/projectNames.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ProjectNames;

(function (ProjectNames) {
  ProjectNames["E2E_TESTS_FOLDER"] = "e2e";
  ProjectNames["E2E_PLUGINS_SUBFOLDER"] = "plugins";
  ProjectNames["E2E_PLUGINS_FILE"] = "plugins.js";
  ProjectNames["E2E_SUPPORT_SUBFOLER"] = "support";
  ProjectNames["E2E_SUPPORT_FILE"] = "support.js";
  ProjectNames["E2E_TSCONFIG_FILE"] = "tsconfig.common.json";
  ProjectNames["E2E_PAGE_OBJECTS_FOLDER"] = "pageObjects";
  ProjectNames["E2E_FEATURES_SUBFOLER"] = "features";
  ProjectNames["E2E_FEATURES_COMMON_SUBFOLDER"] = "common";
  ProjectNames["E2E_FEATURES_COMMON_BEFORE_FILE"] = "globalBefore.ts";
  ProjectNames["E2E_CONFIG_SUBFOLDER"] = "config";
  ProjectNames["GITIGNORE_FILE"] = ".gitignore";
  ProjectNames["CONFIG_FOLDER"] = "config";
  ProjectNames["OUTPUT_FOLDER"] = "dist";
  ProjectNames["OUTPUT_TSCONFIG_FILE"] = "tsconfig.json";
  ProjectNames["OUTPUT_SCRIPTS_SUBFOLDER"] = "cli";
  ProjectNames["OUTPUT_CORE_FILENAME"] = "main.js";
  ProjectNames["POSTINSTALL_FOLDER"] = "postinstall";
  ProjectNames["SOURCES_FOLDER"] = "src";
  ProjectNames["SOURCES_SCRIPTS_SUBFOLDER"] = "scripts";
  ProjectNames["CORE_ENTRY_FILE"] = "index.ts";
  ProjectNames["TESTS_INDEX_FILE"] = "index.ts";
  ProjectNames["LIBRARY_NAME"] = "e2e-behaviour-testing";
  ProjectNames["CYPRESS_CONFIG_FILE"] = "cypress.json";
  ProjectNames["CYPRESS_INTEGRATION_CONFIG_FILE"] = "cypress.integration.json";
  ProjectNames["CYPRESS_UNIT_CONFIG_FILE"] = "cypress.unit.json";
  ProjectNames["CYPRESS_ENV_FILE"] = "cypress.env.json";
  ProjectNames["CYPRESS_CUCUMBER_CONFIG_FILE"] = ".cypress-cucumber-preprocessorrc";
})(ProjectNames = exports.ProjectNames || (exports.ProjectNames = {}));

/***/ }),

/***/ "./src/scripts/copyFiles.ts":
/*!**********************************!*\
  !*** ./src/scripts/copyFiles.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));

const inquirer_1 = __importDefault(__webpack_require__(/*! inquirer */ "inquirer"));

const projectNames_1 = __webpack_require__(/*! ../../config/projectNames */ "./config/projectNames.ts");

const fileOperationsFunctions_1 = __webpack_require__(/*! ./fileOperationsFunctions */ "./src/scripts/fileOperationsFunctions.ts");

const prepareFilesToCopy_1 = __webpack_require__(/*! ../../config/prepareFilesToCopy */ "./config/prepareFilesToCopy.ts"); // Paths for project where this library is being installed


const PROJECT_BASE_PATH = path_1.default.resolve();
const LIBRARY_TEMPLATES_PATH = path_1.default.resolve('node_modules', "e2e-behaviour-testing", projectNames_1.ProjectNames.POSTINSTALL_FOLDER);
const filesToCopy = prepareFilesToCopy_1.prepareSavedFilesToCopy(PROJECT_BASE_PATH, LIBRARY_TEMPLATES_PATH);
const directoriesToCreate = prepareFilesToCopy_1.prepareDirectoriesToCreate(PROJECT_BASE_PATH);
const choices = [{
  name: 'Copy all files',
  value: 'all'
}, {
  name: 'Copy files interactively',
  value: 'interactive'
}];
inquirer_1.default.prompt([{
  type: 'list',
  name: 'way',
  message: 'How do you want to copy files?',
  choices
}, {
  type: 'confirm',
  name: 'shouldReplaceExisting',
  message: 'Do you want to replace the existing files?',
  default: false,
  when: ({
    way
  }) => {
    return way === 'all';
  }
}]).then(({
  way,
  shouldReplaceExisting
}) => {
  if (way === 'interactive') {
    console.error('Not implemented yet. Vote for it in github repo');
    return;
  }

  fileOperationsFunctions_1.createNecessaryDirectories(directoriesToCreate);
  fileOperationsFunctions_1.copyNecessaryFiles(filesToCopy, shouldReplaceExisting);
});

/***/ }),

/***/ "./src/scripts/fileOperationsFunctions.ts":
/*!************************************************!*\
  !*** ./src/scripts/fileOperationsFunctions.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));

function copyFile(from, to, replaceExisting) {
  const copyFlags = replaceExisting ? undefined : fs_1.default.constants.COPYFILE_EXCL;

  try {
    fs_1.default.copyFileSync(from, to, copyFlags);
  } catch (e) {
    if (e.code !== 'EEXIST' && !replaceExisting) {
      console.warn(`${"e2e-behaviour-testing".toUpperCase()}: Warning:
              Cannot copy file, details:
            ${e}`);
    }
  }
}

exports.copyFile = copyFile;

function createDirectoryIfNotExists(dirPath) {
  if (!fs_1.default.existsSync(dirPath)) {
    try {
      fs_1.default.mkdirSync(dirPath, {
        recursive: true
      });
    } catch (e) {
      console.warn(`${"e2e-behaviour-testing".toUpperCase()}: Warning:
              Cannot create directory, details:
            ${e}`);
    }
  }
}

exports.createDirectoryIfNotExists = createDirectoryIfNotExists;

function copyNecessaryFiles(filesList, replaceExisting = false) {
  filesList.forEach(({
    from,
    to
  }) => {
    copyFile(from, to, replaceExisting);
  });
}

exports.copyNecessaryFiles = copyNecessaryFiles;

function createNecessaryDirectories(directoriesList) {
  directoriesList.forEach(directory => {
    createDirectoryIfNotExists(directory);
  });
}

exports.createNecessaryDirectories = createNecessaryDirectories;

/***/ }),

/***/ "./src/util/postinstallFilenamesConvertor.ts":
/*!***************************************************!*\
  !*** ./src/util/postinstallFilenamesConvertor.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filenamePrefix = 'example';
exports.filenamePostfix = 'template';

function filenameToPostInstallEntry(name) {
  return `${exports.filenamePrefix}.${name}.${exports.filenamePostfix}`;
}

exports.filenameToPostInstallEntry = filenameToPostInstallEntry;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inquirer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=copyFiles.js.map