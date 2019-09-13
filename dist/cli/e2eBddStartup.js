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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/e2eBddStartup.ts");
/******/ })
/************************************************************************/
/******/ ({

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
})(ProjectNames || (ProjectNames = {}));

/***/ }),

/***/ "./src/scripts/e2eBddStartup.ts":
/*!**************************************!*\
  !*** ./src/scripts/e2eBddStartup.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! commander */ "commander");
/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(commander__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_projectNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/projectNames */ "./config/projectNames.ts");
/* harmony import */ var _pageObjectsImportsGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageObjectsImportsGenerator */ "./src/scripts/pageObjectsImportsGenerator.ts");
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

const DEFAULT_CYPRESS_FEATURES_FOLDER = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(_config_projectNames__WEBPACK_IMPORTED_MODULE_3__["ProjectNames"].E2E_TESTS_FOLDER, _config_projectNames__WEBPACK_IMPORTED_MODULE_3__["ProjectNames"].E2E_FEATURES_SUBFOLER);
const DEFAULT_PAGE_OBJECTS_FOLDER_NAME = _config_projectNames__WEBPACK_IMPORTED_MODULE_3__["ProjectNames"].E2E_PAGE_OBJECTS_FOLDER;
const EXPECTED_CONFIG_PATH = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(_config_projectNames__WEBPACK_IMPORTED_MODULE_3__["ProjectNames"].CYPRESS_CONFIG_FILE);
const FAULT_EXIT_CODE = 1;

function copyConfig(config) {
  const configPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(config);

  try {
    fs__WEBPACK_IMPORTED_MODULE_1___default.a.copyFileSync(configPath, EXPECTED_CONFIG_PATH);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Config file do not exist');
    } else {
      console.error(err.message);
    }

    process.exit(FAULT_EXIT_CODE);
  }
}

function readConfig() {
  try {
    return JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(EXPECTED_CONFIG_PATH, {
      encoding: 'utf-8'
    }));
  } catch (err) {
    console.error(err.message);
    process.exit(FAULT_EXIT_CODE);
  }
}

function determinePageObjectsPath(cypressConfig) {
  const {
    integrationFolder,
    pageObjectsFolder
  } = cypressConfig;

  if (pageObjectsFolder) {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(pageObjectsFolder);
  }

  const integrationFolderPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(integrationFolder ? integrationFolder : DEFAULT_CYPRESS_FEATURES_FOLDER);
  return path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(integrationFolderPath, '..', DEFAULT_PAGE_OBJECTS_FOLDER_NAME);
}

commander__WEBPACK_IMPORTED_MODULE_2___default.a.version("0.4.6").name('e2e-bdd-startup').option('-c, --config <path>', 'path to cypress config').parse(process.argv);
const config = commander__WEBPACK_IMPORTED_MODULE_2___default.a.config || _config_projectNames__WEBPACK_IMPORTED_MODULE_3__["ProjectNames"].CYPRESS_CONFIG_FILE;

if (config !== _config_projectNames__WEBPACK_IMPORTED_MODULE_3__["ProjectNames"].CYPRESS_CONFIG_FILE) {
  copyConfig(config);
}

const cypressConfig = readConfig();
const pageObjectsFolderPath = determinePageObjectsPath(cypressConfig);

try {
  const stats = fs__WEBPACK_IMPORTED_MODULE_1___default.a.statSync(pageObjectsFolderPath);

  if (!stats.isDirectory()) {
    throw new Error('Page objects is not a directory');
  }
} catch (e) {
  console.error(e.message);
  process.exit(FAULT_EXIT_CODE);
}

Object(_pageObjectsImportsGenerator__WEBPACK_IMPORTED_MODULE_4__["generatePageObjects"])(pageObjectsFolderPath);

/***/ }),

/***/ "./src/scripts/pageObjectsImportsGenerator.ts":
/*!****************************************************!*\
  !*** ./src/scripts/pageObjectsImportsGenerator.ts ***!
  \****************************************************/
/*! exports provided: generatePageObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePageObjects", function() { return generatePageObjects; });
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "core-js/modules/es.array.flat");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "core-js/modules/es.array.unscopables.flat");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "core-js/modules/es.string.replace");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_projectNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/projectNames */ "./config/projectNames.ts");





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



const posixPath = path__WEBPACK_IMPORTED_MODULE_5___default.a.posix; // Max depth of page objects files

const MAX_DEPTH = 10;
const AVAILABLE_EXTENSIONS = ['.js', '.ts']; //Remove extensions and encapsulate single quotes

const filesMap = filename => filename.slice(0, -3).replace(`'`, `\\'`); // Create file with imports


const filesReduce = (acc, filename) => acc + `import '${filename}';\n`;

function getFiles(pageObjectsPath, nestedPath = '.') {
  const files = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readdirSync(path__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(pageObjectsPath, nestedPath), {
    withFileTypes: true
  });
  return files.map(dirent => {
    if (dirent.isDirectory()) {
      return getFiles(pageObjectsPath, path__WEBPACK_IMPORTED_MODULE_5___default.a.join(nestedPath, dirent.name));
    }

    return path__WEBPACK_IMPORTED_MODULE_5___default.a.join(nestedPath, dirent.name);
  }).flat(MAX_DEPTH);
}

const generatePageObjects = pageObjectDirPath => {
  const files = getFiles(pageObjectDirPath).filter(filePath => AVAILABLE_EXTENSIONS.includes(path__WEBPACK_IMPORTED_MODULE_5___default.a.extname(filePath)) && filePath !== _config_projectNames__WEBPACK_IMPORTED_MODULE_6__["ProjectNames"].TESTS_INDEX_FILE).map(filesMap).map(file => {
    return `./${posixPath.join(...file.split(path__WEBPACK_IMPORTED_MODULE_5___default.a.sep))}`;
  });
  const importContent = files.reduce(filesReduce, '');
  fs__WEBPACK_IMPORTED_MODULE_4___default.a.writeFileSync(path__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(pageObjectDirPath, 'index.ts'), importContent);
};

/***/ }),

/***/ "commander":
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("commander");

/***/ }),

/***/ "core-js/modules/es.array.flat":
/*!************************************************!*\
  !*** external "core-js/modules/es.array.flat" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.flat");

/***/ }),

/***/ "core-js/modules/es.array.iterator":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.iterator" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator");

/***/ }),

/***/ "core-js/modules/es.array.unscopables.flat":
/*!************************************************************!*\
  !*** external "core-js/modules/es.array.unscopables.flat" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.unscopables.flat");

/***/ }),

/***/ "core-js/modules/es.string.replace":
/*!****************************************************!*\
  !*** external "core-js/modules/es.string.replace" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

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
//# sourceMappingURL=e2eBddStartup.js.map