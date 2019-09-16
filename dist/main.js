(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["e2e-behaviour-testing"] = factory();
	else
		root["e2e-behaviour-testing"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Given/index.ts":
/*!****************************!*\
  !*** ./lib/Given/index.ts ***!
  \****************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _openPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openPage */ "./lib/Given/openPage.ts");
/* harmony import */ var _loggedIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loggedIn */ "./lib/Given/loggedIn.ts");
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


function register() {
  _openPage__WEBPACK_IMPORTED_MODULE_0__["register"]();
  _loggedIn__WEBPACK_IMPORTED_MODULE_1__["register"]();
}

/***/ }),

/***/ "./lib/Given/loggedIn.ts":
/*!*******************************!*\
  !*** ./lib/Given/loggedIn.ts ***!
  \*******************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./lib/types.ts");
/* harmony import */ var _src_core_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");


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



function register() {
  const loggedInAsFunction = (apiSelectorString, roleSelectorString, redirectSelectorString) => {
    const navigationSelector = new _types__WEBPACK_IMPORTED_MODULE_2__["PageObjectSelector"](apiSelectorString);
    const roleSelector = new _types__WEBPACK_IMPORTED_MODULE_2__["PageObjectSelector"](roleSelectorString);
    const url = Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_3__["getNavigationUrl"])(navigationSelector);
    const requestBody = {};

    for (const field of roleSelector.getValue()) {
      requestBody[field.fieldName] = field.value;
    }

    cy.request({
      method: 'POST',
      url,
      form: true,
      body: requestBody,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property('headers');
    });

    if (redirectSelectorString) {
      const redirectSelector = new _types__WEBPACK_IMPORTED_MODULE_2__["PageObjectSelector"](redirectSelectorString);
      cy.visit(Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_3__["getNavigationUrl"])(redirectSelector));
    }
  };

  Object(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_1__["Given"])(`I logged in at {string} as {string}`, loggedInAsFunction);
  Object(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_1__["Given"])(`I logged in at {string} as {string} and visit {string}`, loggedInAsFunction);
}

/***/ }),

/***/ "./lib/Given/openPage.ts":
/*!*******************************!*\
  !*** ./lib/Given/openPage.ts ***!
  \*******************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./lib/types.ts");
/* harmony import */ var _src_core_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");
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



function register() {
  Object(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__["Given"])(`I open {string}`, selectorString => {
    const selector = new _types__WEBPACK_IMPORTED_MODULE_1__["PageObjectSelector"](selectorString);
    cy.visit(Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_2__["getNavigationUrl"])(selector));
  });
}

/***/ }),

/***/ "./lib/Then/correctUrl.ts":
/*!********************************!*\
  !*** ./lib/Then/correctUrl.ts ***!
  \********************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./lib/types.ts");
/* harmony import */ var _src_core_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");
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



function register() {
  Object(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__["Then"])(`URL is {string}`, selectorString => {
    const selector = new _types__WEBPACK_IMPORTED_MODULE_1__["PageObjectSelector"](selectorString);
    const url = Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_2__["getNavigationUrl"])(selector);

    if (url) {
      cy.url().should('include', `${Cypress.config().baseUrl}/${url}`);
    }
  });
}

/***/ }),

/***/ "./lib/Then/index.ts":
/*!***************************!*\
  !*** ./lib/Then/index.ts ***!
  \***************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _seeTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seeTitle */ "./lib/Then/seeTitle.ts");
/* harmony import */ var _correctUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correctUrl */ "./lib/Then/correctUrl.ts");
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


function register() {
  _seeTitle__WEBPACK_IMPORTED_MODULE_0__["register"]();
  _correctUrl__WEBPACK_IMPORTED_MODULE_1__["register"]();
}

/***/ }),

/***/ "./lib/Then/seeTitle.ts":
/*!******************************!*\
  !*** ./lib/Then/seeTitle.ts ***!
  \******************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__);
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

function register() {
  Object(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__["Then"])(`I see {string} in title`, title => {
    cy.title().should('include', title);
  });
}

/***/ }),

/***/ "./lib/When/click.ts":
/*!***************************!*\
  !*** ./lib/When/click.ts ***!
  \***************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "core-js/modules/es.promise");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./lib/types.ts");
/* harmony import */ var _src_core_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");


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



function register() {
  Object(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_1__["When"])(`I click {string}`, async (selectorString, table) => {
    const options = table ? new _types__WEBPACK_IMPORTED_MODULE_2__["ClickOptions"](table.rowsHash()) : new _types__WEBPACK_IMPORTED_MODULE_2__["ClickOptions"]({});
    const selector = new _types__WEBPACK_IMPORTED_MODULE_2__["PageObjectSelector"](selectorString);
    const element = Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_3__["getElement"])(selector);
    const getOptions = Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_3__["extractCommonGetOptions"])(options);

    if (options.first) {
      cy.get(element, getOptions).first().click({
        force: options.force
      });
    } else {
      cy.get(element, getOptions).click({
        force: options.force
      });
    }
  });
  Object(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_1__["When"])(`I click blank link {string}`, (selectorString, table) => {
    const selector = new _types__WEBPACK_IMPORTED_MODULE_2__["PageObjectSelector"](selectorString);
    const options = table ? new _types__WEBPACK_IMPORTED_MODULE_2__["BlankLinkClickOptions"](table.rowsHash()) : new _types__WEBPACK_IMPORTED_MODULE_2__["BlankLinkClickOptions"]({});
    const element = Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_3__["getElement"])(selector);
    const getOptions = Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_3__["extractCommonGetOptions"])(options);

    const callback = el => {
      if (el.attr('target') === '_blank' && el.attr('href') && !options.customClick) {
        const url = el.attr('href');

        if (!options.force) {
          cy.root().should('be.visible');
        }

        cy.visit(url);
      } else {
        let href;
        let stub;
        cy.window().then(win => {
          stub = cy.stub(win, 'open').callsFake(passedHref => {
            href = passedHref;
          });
        });
        cy.root().click({
          force: options.force
        }).then(() => {
          expect(stub).to.be.called;
          cy.visit(href);
        });
      }
    };

    if (options.first) {
      cy.get(element, getOptions).first().within(callback);
    } else {
      cy.get(element, getOptions).within(callback);
    }
  });
}

/***/ }),

/***/ "./lib/When/hover.ts":
/*!***************************!*\
  !*** ./lib/When/hover.ts ***!
  \***************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./lib/types.ts");
/* harmony import */ var _src_core_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");
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



function register() {
  Object(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__["When"])(`I hover element {string} without sub hovers`, selectorString => {
    const selector = new _types__WEBPACK_IMPORTED_MODULE_1__["PageObjectSelector"](selectorString);
    const element = Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_2__["getElement"])(selector);

    if (element === null) {
      return;
    }

    cy.get(element).first().trigger('mouseover');
  });
}

/***/ }),

/***/ "./lib/When/index.ts":
/*!***************************!*\
  !*** ./lib/When/index.ts ***!
  \***************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click */ "./lib/When/click.ts");
/* harmony import */ var _see__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see */ "./lib/When/see.ts");
/* harmony import */ var _logIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logIn */ "./lib/When/logIn.ts");
/* harmony import */ var _typingIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typingIn */ "./lib/When/typingIn.ts");
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hover */ "./lib/When/hover.ts");
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





function register() {
  _click__WEBPACK_IMPORTED_MODULE_0__["register"]();
  _see__WEBPACK_IMPORTED_MODULE_1__["register"]();
  _logIn__WEBPACK_IMPORTED_MODULE_2__["register"]();
  _typingIn__WEBPACK_IMPORTED_MODULE_3__["register"]();
  _hover__WEBPACK_IMPORTED_MODULE_4__["register"]();
}

/***/ }),

/***/ "./lib/When/logIn.ts":
/*!***************************!*\
  !*** ./lib/When/logIn.ts ***!
  \***************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "core-js/modules/es.promise");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./lib/types.ts");
/* harmony import */ var _src_core_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");



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



function register() {
  Object(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_2__["When"])(`I log in at {string} as {string}`, async (selectorString, roleSelectorString) => {
    const elementSelector = new _types__WEBPACK_IMPORTED_MODULE_3__["PageObjectSelector"](selectorString);
    const roleSelector = new _types__WEBPACK_IMPORTED_MODULE_3__["PageObjectSelector"](roleSelectorString);
    const element = Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_4__["getElement"])(elementSelector);
    cy.get(element).within(form => {
      cy.root().should('be.visible');
      const credentials = roleSelector.getValue();

      for (const field of credentials) {
        cy.get(`input[name="${field.fieldName}"]`).type(field.value);
      }

      cy.wrap(form).submit();
    });
  });
}

/***/ }),

/***/ "./lib/When/see.ts":
/*!*************************!*\
  !*** ./lib/When/see.ts ***!
  \*************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./lib/types.ts");
/* harmony import */ var _src_core_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");
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



function register() {
  Object(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__["When"])(`I see (element ){string}`, (selectorString, table) => {
    const options = table ? new _types__WEBPACK_IMPORTED_MODULE_1__["SeeOptions"](table.rowsHash()) : new _types__WEBPACK_IMPORTED_MODULE_1__["SeeOptions"]({});
    const selector = new _types__WEBPACK_IMPORTED_MODULE_1__["PageObjectSelector"](selectorString);
    const getOptions = Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_2__["extractCommonGetOptions"])(options);
    const element = Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_2__["getElement"])(selector, getOptions);

    if (options.amount === 1) {
      cy.get(element).should('have.length', 1).scrollIntoView().should('be.visible');
    } else {
      cy.get(element).then(matchedElements => {
        if (options.amount) {
          cy.wrap(matchedElements).should('have.length', options.amount);
        }

        cy.wrap(matchedElements).each(matchedElement => {
          cy.wrap(matchedElement).scrollIntoView().should('be.visible');
        });
      });
    }
  });
}

/***/ }),

/***/ "./lib/When/typingIn.ts":
/*!******************************!*\
  !*** ./lib/When/typingIn.ts ***!
  \******************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
/* harmony import */ var cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./lib/types.ts");
/* harmony import */ var _src_core_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");
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



function register() {
  Object(cypress_cucumber_preprocessor_steps__WEBPACK_IMPORTED_MODULE_0__["When"])(`I type {string} into element {string}`, (text, selectorString) => {
    const selector = new _types__WEBPACK_IMPORTED_MODULE_1__["PageObjectSelector"](selectorString);
    const element = Object(_src_core_functions__WEBPACK_IMPORTED_MODULE_2__["getElement"])(selector);

    if (element === null) {
      return;
    }

    cy.get(element).scrollIntoView().should('be.visible').type(`${text}{enter}`);
  });
}

/***/ }),

/***/ "./lib/globalHooks.ts":
/*!****************************!*\
  !*** ./lib/globalHooks.ts ***!
  \****************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/core */ "./src/core/index.ts");


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


function extractCredentials(credentials) {
  var _dec, _class;

  let // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Credentials = (_dec = Object(_src_core__WEBPACK_IMPORTED_MODULE_1__["registerPageObject"])({
    name: 'Credentials',
    type: _src_core__WEBPACK_IMPORTED_MODULE_1__["PageObjectField"].RoleCredentials
  }), _dec(_class = class Credentials {
    constructor() {
      if (credentials) {
        Object.entries(credentials).forEach(([key, value]) => {
          this[key] = value;
        });
      }
    }

  }) || _class);
}

function register() {
  before(() => {
    const credentials = Cypress.env('credentials') || {};
    extractCredentials(credentials);
  });
  beforeEach(() => {
    const urlToVisit = Cypress.env('startUrl') || '/';
    cy.visit(urlToVisit);
  });
}

/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./lib/types.ts");
/* harmony import */ var _globalHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalHooks */ "./lib/globalHooks.ts");
/* harmony import */ var _Then__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Then */ "./lib/Then/index.ts");
/* harmony import */ var _When__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./When */ "./lib/When/index.ts");
/* harmony import */ var _Given__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Given */ "./lib/Given/index.ts");
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






function register() {
  _types__WEBPACK_IMPORTED_MODULE_1__["register"]();
  _globalHooks__WEBPACK_IMPORTED_MODULE_2__["register"]();
  _Given__WEBPACK_IMPORTED_MODULE_5__["register"]();
  _When__WEBPACK_IMPORTED_MODULE_4__["register"]();
  _Then__WEBPACK_IMPORTED_MODULE_3__["register"]();
}

/***/ }),

/***/ "./lib/types.ts":
/*!**********************!*\
  !*** ./lib/types.ts ***!
  \**********************/
/*! exports provided: PageObjectSelector, ElementGetOptions, ClickOptions, BlankLinkClickOptions, SeeOptions, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageObjectSelector", function() { return PageObjectSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementGetOptions", function() { return ElementGetOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOptions", function() { return ClickOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLinkClickOptions", function() { return BlankLinkClickOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeOptions", function() { return SeeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/core */ "./src/core/index.ts");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

class PageObjectSelector {
  constructor(pageObjectSelector) {
    _defineProperty(this, "classInstance", void 0);

    _defineProperty(this, "fieldDescriptor", void 0);

    _defineProperty(this, "className", void 0);

    _defineProperty(this, "fieldName", void 0);

    const [className, fieldName] = pageObjectSelector.split('.');
    this.fieldName = fieldName;
    this.className = className;
    const classInstance = _src_core__WEBPACK_IMPORTED_MODULE_1__["storage"].get(className);

    if (classInstance === undefined) {
      throw new Error(`Cannot find page object class ${className}`);
    }

    this.classInstance = classInstance;
    this.fieldDescriptor = this.classInstance.getFieldDescriptor(this.fieldName);
  }

  getValue() {
    if (this.fieldDescriptor.invokable) {
      return this.classInstance[this.fieldName]();
    } else {
      return this.classInstance[this.fieldName];
    }
  }

  toString() {
    return `${this.className}.${this.fieldName}`;
  }

}
class ElementGetOptions {
  constructor(props) {
    _defineProperty(this, "wait", null);

    this.wait = Number(props.wait) || this.wait;
  }

}
class ClickOptions extends ElementGetOptions {
  constructor(props) {
    super(props);

    _defineProperty(this, "first", false);

    _defineProperty(this, "force", false);

    this.first = Boolean(props.first) || this.first;
    this.force = Boolean(props.force) || this.force;
  }

}
class BlankLinkClickOptions extends ClickOptions {
  constructor(props) {
    super(props);

    _defineProperty(this, "customClick", false);

    this.customClick = Boolean(props.customClick) || this.customClick;
  }

}
class SeeOptions extends ElementGetOptions {
  constructor(props) {
    super(props);

    _defineProperty(this, "amount", null);

    this.amount = Number(props.amount) || this.amount;
  }

}
function register() {
  /* Use this across project as soon as
  https://youtrack.jetbrains.com/issue/WEB-39983?_ga=2.137121712.1268965974.1566197839-869244565.1565073645
  is resolved
   defineParameterType({
      name: 'pageObjectSelector',
      regexp: /[a-zA-Z]+\.[a-zA-Z]+/,
      transformer: selector => new PageObjectSelector(selector)
  });
   */
}

/***/ }),

/***/ "./src/core/functions.ts":
/*!*******************************!*\
  !*** ./src/core/functions.ts ***!
  \*******************************/
/*! exports provided: getElement, getNavigationUrl, extractCommonGetOptions, makeCypressWaitForPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavigationUrl", function() { return getNavigationUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractCommonGetOptions", function() { return extractCommonGetOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCypressWaitForPromise", function() { return makeCypressWaitForPromise; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pageObjectRegistrator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageObjectRegistrator */ "./src/core/pageObjectRegistrator.ts");


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

const getElementAlias = 'getElement';
function getElement(selector, getOptions = {}) {
  const element = '@' + getElementAlias;

  switch (selector.fieldDescriptor.type) {
    case _pageObjectRegistrator__WEBPACK_IMPORTED_MODULE_1__["PageObjectField"].Xpath:
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cy.xpath(selector.getValue(), getOptions).as(getElementAlias);
      break;

    case _pageObjectRegistrator__WEBPACK_IMPORTED_MODULE_1__["PageObjectField"].Selector:
      {
        const value = selector.getValue();

        if (Array.isArray(value) && typeof value[1] === 'string') {
          const [element, contains] = value;
          cy.contains(element, contains, getOptions).as(getElementAlias);
        } else {
          cy.get(selector.getValue(), getOptions).as(getElementAlias);
        }

        break;
      }

    default:
      throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to see element by selector '${selector.toString()}' `);
  }

  return element;
}
function getNavigationUrl(selector) {
  if (selector.fieldDescriptor.type !== _pageObjectRegistrator__WEBPACK_IMPORTED_MODULE_1__["PageObjectField"].Navigation) {
    throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to get URL by selector '${selector.toString()}' `);
  }

  return selector.getValue();
}
function extractCommonGetOptions(options) {
  const result = {};

  if (options.wait !== null && !isNaN(options.wait)) {
    result.timeout = options.wait;
  }

  return result;
}
function makeCypressWaitForPromise(promiseToWait) {
  return new Cypress.Promise((resolve, reject) => {
    promiseToWait.then(resolve).catch(reject);
  });
}

/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/*! exports provided: makeCypressWaitForPromise, storage, PageObjectField, registerPageObject, registerSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageObjectRegistrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageObjectRegistrator */ "./src/core/pageObjectRegistrator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return _pageObjectRegistrator__WEBPACK_IMPORTED_MODULE_0__["storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageObjectField", function() { return _pageObjectRegistrator__WEBPACK_IMPORTED_MODULE_0__["PageObjectField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerPageObject", function() { return _pageObjectRegistrator__WEBPACK_IMPORTED_MODULE_0__["registerPageObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerSelector", function() { return _pageObjectRegistrator__WEBPACK_IMPORTED_MODULE_0__["registerSelector"]; });

/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/core/functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeCypressWaitForPromise", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__["makeCypressWaitForPromise"]; });

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



/***/ }),

/***/ "./src/core/pageObjectRegistrator.ts":
/*!*******************************************!*\
  !*** ./src/core/pageObjectRegistrator.ts ***!
  \*******************************************/
/*! exports provided: storage, PageObjectField, registerPageObject, registerSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageObjectField", function() { return PageObjectField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPageObject", function() { return registerPageObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSelector", function() { return registerSelector; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);


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
const storage = new Map(); // Keys should be the same as values to allow following typecheck: keyof typeof PageObjectFieldType

let PageObjectField;

(function (PageObjectField) {
  PageObjectField["Selector"] = "Selector";
  PageObjectField["Xpath"] = "Xpath";
  PageObjectField["Navigation"] = "Navigation";
  PageObjectField["RoleCredentials"] = "RoleCredentials";
})(PageObjectField || (PageObjectField = {}));

const metadataTypeKey = 'PageObjectFieldType';
const metadataInvokableKey = 'PageObjectFieldInvokable';
function registerPageObject(params) {
  // TODO replace any with valid type
  const name = typeof params === 'string' ? params : params.name;
  const type = params.hasOwnProperty('type') ? params.type : null;
  return constructor => {
    class MetadataProvider extends constructor {
      getFieldDescriptor(key) {
        if (Reflect.hasMetadata(metadataTypeKey, this, key)) {
          return {
            invokable: Reflect.getMetadata(metadataInvokableKey, this, key),
            type: Reflect.getMetadata(metadataTypeKey, this, key)
          };
        } else if (Reflect.hasMetadata(metadataTypeKey, this)) {
          return {
            type: Reflect.getMetadata(metadataTypeKey, this),
            invokable: false
          };
        } else {
          return {
            type: null,
            invokable: false
          };
        }
      }

    }

    const classInstance = new MetadataProvider();

    if (type !== null) {
      Reflect.defineMetadata(metadataTypeKey, type, MetadataProvider.prototype);
    }

    cy.log(`Added ${name}`);

    if (storage.has(name)) {
      throw new Error(`Detected page object with duplicate name ${name}`);
    }

    storage.set(name, classInstance);
  };
}
function registerSelector(type) {
  return function (target, key, descriptor) {
    const invokable = descriptor !== undefined;
    Reflect.defineMetadata(metadataTypeKey, type, target, key);
    Reflect.defineMetadata(metadataInvokableKey, invokable, target, key);
  };
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: register, makeCypressWaitForPromise, storage, PageObjectField, registerPageObject, registerSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeCypressWaitForPromise", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["makeCypressWaitForPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageObjectField", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["PageObjectField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerPageObject", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["registerPageObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerSelector", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["registerSelector"]; });

/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "register", function() { return _lib__WEBPACK_IMPORTED_MODULE_1__["register"]; });

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



/***/ }),

/***/ "core-js/modules/es.array.iterator":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.iterator" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator");

/***/ }),

/***/ "core-js/modules/es.promise":
/*!*********************************************!*\
  !*** external "core-js/modules/es.promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise");

/***/ }),

/***/ "cypress-cucumber-preprocessor/steps":
/*!******************************************************!*\
  !*** external "cypress-cucumber-preprocessor/steps" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cypress-cucumber-preprocessor/steps");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map