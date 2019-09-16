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

/***/ "./src/scripts/e2eBddStartup.ts":
/*!**************************************!*\
  !*** ./src/scripts/e2eBddStartup.ts ***!
  \**************************************/
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

const fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));

const commander_1 = __importDefault(__webpack_require__(/*! commander */ "commander"));

const projectNames_1 = __webpack_require__(/*! ../../config/projectNames */ "./config/projectNames.ts");

const pageObjectsImportsGenerator_1 = __webpack_require__(/*! ./pageObjectsImportsGenerator */ "./src/scripts/pageObjectsImportsGenerator.ts");

const DEFAULT_CYPRESS_FEATURES_FOLDER = path_1.default.resolve(projectNames_1.ProjectNames.E2E_TESTS_FOLDER, projectNames_1.ProjectNames.E2E_FEATURES_SUBFOLER);
const DEFAULT_PAGE_OBJECTS_FOLDER_NAME = projectNames_1.ProjectNames.E2E_PAGE_OBJECTS_FOLDER;
const EXPECTED_CONFIG_PATH = path_1.default.resolve(projectNames_1.ProjectNames.CYPRESS_CONFIG_FILE);
const FAULT_EXIT_CODE = 1;

function copyConfig(config) {
  const configPath = path_1.default.resolve(config);

  try {
    fs_1.default.copyFileSync(configPath, EXPECTED_CONFIG_PATH);
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
  let configContent = null;

  try {
    configContent = JSON.parse(fs_1.default.readFileSync(EXPECTED_CONFIG_PATH, {
      encoding: 'utf-8'
    }));
  } catch (err) {
    console.error(err.message);
    process.exit(FAULT_EXIT_CODE);
  }

  return configContent;
}

function determinePageObjectsPath(cypressConfig) {
  const {
    integrationFolder,
    pageObjectsFolder
  } = cypressConfig;

  if (pageObjectsFolder) {
    return path_1.default.resolve(pageObjectsFolder);
  }

  const integrationFolderPath = path_1.default.resolve(integrationFolder ? integrationFolder : DEFAULT_CYPRESS_FEATURES_FOLDER);
  return path_1.default.resolve(integrationFolderPath, '..', DEFAULT_PAGE_OBJECTS_FOLDER_NAME);
}

commander_1.default.version("0.4.6").name('e2e-bdd-startup').option('-c, --config <path>', 'path to cypress config').parse(process.argv);
const config = commander_1.default.config || projectNames_1.ProjectNames.CYPRESS_CONFIG_FILE;

if (config !== projectNames_1.ProjectNames.CYPRESS_CONFIG_FILE) {
  copyConfig(config);
}

const cypressConfig = readConfig();
const pageObjectsFolderPath = determinePageObjectsPath(cypressConfig);

try {
  const stats = fs_1.default.statSync(pageObjectsFolderPath);

  if (!stats.isDirectory()) {
    throw new Error('Page objects is not a directory');
  }
} catch (e) {
  console.error(e.message);
  process.exit(FAULT_EXIT_CODE);
}

pageObjectsImportsGenerator_1.generatePageObjects(pageObjectsFolderPath);

/***/ }),

/***/ "./src/scripts/pageObjectsImportsGenerator.ts":
/*!****************************************************!*\
  !*** ./src/scripts/pageObjectsImportsGenerator.ts ***!
  \****************************************************/
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

__webpack_require__(/*! core-js/modules/es.array.flat */ "core-js/modules/es.array.flat");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");

__webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "core-js/modules/es.array.unscopables.flat");

__webpack_require__(/*! core-js/modules/es.string.replace */ "core-js/modules/es.string.replace");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));

const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));

const projectNames_1 = __webpack_require__(/*! ../../config/projectNames */ "./config/projectNames.ts");

const posixPath = path_1.default.posix; // Max depth of page objects files

const MAX_DEPTH = 10;
const AVAILABLE_EXTENSIONS = ['.js', '.ts']; //Remove extensions and encapsulate single quotes

const filesMap = filename => filename.slice(0, -3).replace(`'`, `\\'`); // Create file with imports


const filesReduce = (acc, filename) => acc + `import '${filename}';\n`;

function getFiles(pageObjectsPath, nestedPath = '.') {
  const files = fs_1.default.readdirSync(path_1.default.resolve(pageObjectsPath, nestedPath), {
    withFileTypes: true
  });
  return files.map(dirent => {
    if (dirent.isDirectory()) {
      return getFiles(pageObjectsPath, path_1.default.join(nestedPath, dirent.name));
    }

    return path_1.default.join(nestedPath, dirent.name);
  }).flat(MAX_DEPTH);
}

exports.generatePageObjects = pageObjectDirPath => {
  const files = getFiles(pageObjectDirPath).filter(filePath => AVAILABLE_EXTENSIONS.includes(path_1.default.extname(filePath)) && filePath !== projectNames_1.ProjectNames.TESTS_INDEX_FILE).map(filesMap).map(file => {
    return `./${posixPath.join(...file.split(path_1.default.sep))}`;
  });
  const importContent = files.reduce(filesReduce, '');
  fs_1.default.writeFileSync(path_1.default.resolve(pageObjectDirPath, 'index.ts'), importContent);
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