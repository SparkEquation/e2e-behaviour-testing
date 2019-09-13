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
/*! exports provided: prepareFilesToSave, prepareSavedFilesToCopy, prepareDirectoriesToCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareFilesToSave", function() { return prepareFilesToSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareSavedFilesToCopy", function() { return prepareSavedFilesToCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareDirectoriesToCreate", function() { return prepareDirectoriesToCreate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_util_postinstallFilenamesConvertor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/util/postinstallFilenamesConvertor */ "./src/util/postinstallFilenamesConvertor.ts");
/* harmony import */ var _projectNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectNames */ "./config/projectNames.ts");



function prepareFilesToSave() {
  return [{
    path: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(_projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TESTS_FOLDER, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_PLUGINS_SUBFOLDER),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_PLUGINS_FILE
  }, {
    path: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(_projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TESTS_FOLDER, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_SUPPORT_SUBFOLER),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_SUPPORT_FILE
  }, {
    path: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(_projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].CONFIG_FOLDER),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TSCONFIG_FILE
  }, {
    path: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(_projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TESTS_FOLDER, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_PAGE_OBJECTS_FOLDER),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].GITIGNORE_FILE
  }, {
    path: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(_projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TESTS_FOLDER, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_PAGE_OBJECTS_FOLDER),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].GITIGNORE_FILE
  }, {
    path: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].CYPRESS_CONFIG_FILE
  }].map(fileInfo => ({
    from: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(fileInfo.path, fileInfo.name),
    to: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(_projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].POSTINSTALL_FOLDER, Object(_src_util_postinstallFilenamesConvertor__WEBPACK_IMPORTED_MODULE_1__["filenameToPostInstallEntry"])(fileInfo.name))
  }));
}
function prepareSavedFilesToCopy(projectBasePath, libraryTemplatesPath) {
  return [// GitIgnore file
  {
    resultDir: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(projectBasePath, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TESTS_FOLDER, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_PAGE_OBJECTS_FOLDER),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].GITIGNORE_FILE
  }, // Plugin file
  {
    resultDir: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(projectBasePath, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TESTS_FOLDER, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_PLUGINS_SUBFOLDER),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_PLUGINS_FILE
  }, // Common file to run before tests
  {
    resultDir: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(projectBasePath, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TESTS_FOLDER, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_FEATURES_SUBFOLER, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_FEATURES_COMMON_SUBFOLDER),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_FEATURES_COMMON_BEFORE_FILE
  }, // Cypress-cucumber-preprocessor config
  {
    resultDir: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(projectBasePath),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].CYPRESS_CONFIG_FILE
  }, // Cypress config
  {
    resultDir: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(projectBasePath),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].CYPRESS_CONFIG_FILE
  }, // TS config
  {
    resultDir: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(projectBasePath, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TESTS_FOLDER),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TSCONFIG_FILE,
    outputName: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].OUTPUT_TSCONFIG_FILE
  }, // support/index
  {
    resultDir: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(projectBasePath, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TESTS_FOLDER, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_SUPPORT_SUBFOLER),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_SUPPORT_SUBFOLER
  }, // credentials template
  {
    resultDir: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(projectBasePath),
    name: _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].CYPRESS_ENV_FILE
  }].map(fileInfo => ({
    from: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(libraryTemplatesPath, Object(_src_util_postinstallFilenamesConvertor__WEBPACK_IMPORTED_MODULE_1__["filenameToPostInstallEntry"])(fileInfo.name)),
    to: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(fileInfo.resultDir, fileInfo.outputName || fileInfo.name)
  }));
}
function prepareDirectoriesToCreate(projectBasePath) {
  const PROJECT_E2E_PATH = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(projectBasePath, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_TESTS_FOLDER);
  const PROJECT_PLUGINS_PATH = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(PROJECT_E2E_PATH, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_PLUGINS_SUBFOLDER);
  const PROJECT_SUPPORT_PATH = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(PROJECT_E2E_PATH, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_SUPPORT_SUBFOLER);
  const PROJECT_PAGE_OBJECTS_PATH = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(PROJECT_E2E_PATH, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_PAGE_OBJECTS_FOLDER);
  const PROJECT_TESTS_COMMON_PATH = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(PROJECT_E2E_PATH, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_FEATURES_SUBFOLER, _projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].E2E_FEATURES_COMMON_SUBFOLDER);
  return [PROJECT_PLUGINS_PATH, PROJECT_SUPPORT_PATH, PROJECT_PAGE_OBJECTS_PATH, PROJECT_TESTS_COMMON_PATH];
}

/***/ }),

/***/ "./config/projectNames.ts":
/*!********************************!*\
  !*** ./config/projectNames.ts ***!
  \********************************/
/*! exports provided: ProjectNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectNames", function() { return ProjectNames; });
let ProjectNames;

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
  ProjectNames["CYPRESS_ENV_FILE"] = "cypress.env.json";
})(ProjectNames || (ProjectNames = {}));

/***/ }),

/***/ "./src/scripts/copyFiles.ts":
/*!**********************************!*\
  !*** ./src/scripts/copyFiles.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inquirer */ "inquirer");
/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inquirer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_projectNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/projectNames */ "./config/projectNames.ts");
/* harmony import */ var _fileOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fileOperationsFunctions */ "./src/scripts/fileOperationsFunctions.ts");
/* harmony import */ var _config_prepareFilesToCopy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/prepareFilesToCopy */ "./config/prepareFilesToCopy.ts");
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




 // webpack

// Paths for project where this library is being installed
const PROJECT_BASE_PATH = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve();
const LIBRARY_TEMPLATES_PATH = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('node_modules', "e2e-behaviour-testing", _config_projectNames__WEBPACK_IMPORTED_MODULE_2__["ProjectNames"].POSTINSTALL_FOLDER);
const filesToCopy = Object(_config_prepareFilesToCopy__WEBPACK_IMPORTED_MODULE_4__["prepareSavedFilesToCopy"])(PROJECT_BASE_PATH, LIBRARY_TEMPLATES_PATH);
const directoriesToCreate = Object(_config_prepareFilesToCopy__WEBPACK_IMPORTED_MODULE_4__["prepareDirectoriesToCreate"])(PROJECT_BASE_PATH);
const choices = [{
  name: 'Copy all files',
  value: 'all'
}, {
  name: 'Copy files interactively',
  value: 'interactive'
}];
inquirer__WEBPACK_IMPORTED_MODULE_1___default.a.prompt([{
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

  Object(_fileOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__["createNecessaryDirectories"])(directoriesToCreate);
  Object(_fileOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__["copyNecessaryFiles"])(filesToCopy, shouldReplaceExisting);
});

/***/ }),

/***/ "./src/scripts/fileOperationsFunctions.ts":
/*!************************************************!*\
  !*** ./src/scripts/fileOperationsFunctions.ts ***!
  \************************************************/
/*! exports provided: copyNecessaryFiles, createNecessaryDirectories, createDirectoryIfNotExists, copyFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyNecessaryFiles", function() { return copyNecessaryFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNecessaryDirectories", function() { return createNecessaryDirectories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDirectoryIfNotExists", function() { return createDirectoryIfNotExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyFile", function() { return copyFile; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
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

function copyNecessaryFiles(filesList, replaceExisting = false) {
  filesList.forEach(({
    from,
    to
  }) => {
    copyFile(from, to, replaceExisting);
  });
}
function createNecessaryDirectories(directoriesList) {
  directoriesList.forEach(directory => {
    createDirectoryIfNotExists(directory);
  });
}
function createDirectoryIfNotExists(dirPath) {
  if (!fs__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(dirPath)) {
    try {
      fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirSync(dirPath, {
        recursive: true
      });
    } catch (e) {
      console.warn(`${"e2e-behaviour-testing".toUpperCase()}: Warning:
				Cannot create directory, details:
			${e}`);
    }
  }
}
function copyFile(from, to, replaceExisting) {
  let copyFlags = replaceExisting ? undefined : fs__WEBPACK_IMPORTED_MODULE_0___default.a.constants.COPYFILE_EXCL;

  try {
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.copyFileSync(from, to, copyFlags);
  } catch (e) {
    if (e.code !== 'EEXIST' && !replaceExisting) {
      console.warn(`${"e2e-behaviour-testing".toUpperCase()}: Warning:
				Cannot copy file, details:
			${e}`);
    }
  }
}

/***/ }),

/***/ "./src/util/postinstallFilenamesConvertor.ts":
/*!***************************************************!*\
  !*** ./src/util/postinstallFilenamesConvertor.ts ***!
  \***************************************************/
/*! exports provided: filenamePrefix, filenamePostfix, filenameToPostInstallEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filenamePrefix", function() { return filenamePrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filenamePostfix", function() { return filenamePostfix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filenameToPostInstallEntry", function() { return filenameToPostInstallEntry; });
const filenamePrefix = 'example';
const filenamePostfix = 'template';
function filenameToPostInstallEntry(name) {
  return `${filenamePrefix}.${name}.${filenamePostfix}`;
}

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