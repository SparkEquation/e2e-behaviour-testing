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

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const OpenPage = __importStar(__webpack_require__(/*! ./openPage */ "./lib/Given/openPage.ts"));

const LoggedIn = __importStar(__webpack_require__(/*! ./loggedIn */ "./lib/Given/loggedIn.ts"));

function register() {
  OpenPage.register();
  LoggedIn.register();
}

exports.register = register;

/***/ }),

/***/ "./lib/Given/loggedIn.ts":
/*!*******************************!*\
  !*** ./lib/Given/loggedIn.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");

const types_1 = __webpack_require__(/*! ../types */ "./lib/types.ts");

const functions_1 = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");

function register() {
  const loggedInAsFunction = (apiSelectorString, roleSelectorString, redirectSelectorString) => {
    const navigationSelector = new types_1.PageObjectSelector(apiSelectorString);
    const roleSelector = new types_1.PageObjectSelector(roleSelectorString);
    const url = functions_1.getNavigationUrl(navigationSelector);
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
      const redirectSelector = new types_1.PageObjectSelector(redirectSelectorString);
      cy.visit(functions_1.getNavigationUrl(redirectSelector));
    }
  };

  steps_1.Given(`I logged in at {string} as {string}`, loggedInAsFunction);
  steps_1.Given(`I logged in at {string} as {string} and visit {string}`, loggedInAsFunction);
}

exports.register = register;

/***/ }),

/***/ "./lib/Given/openPage.ts":
/*!*******************************!*\
  !*** ./lib/Given/openPage.ts ***!
  \*******************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");

const types_1 = __webpack_require__(/*! ../types */ "./lib/types.ts");

const functions_1 = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");

function register() {
  steps_1.Given(`I open {string}`, selectorString => {
    const selector = new types_1.PageObjectSelector(selectorString);
    cy.visit(functions_1.getNavigationUrl(selector));
  });
}

exports.register = register;

/***/ }),

/***/ "./lib/Then/correctUrl.ts":
/*!********************************!*\
  !*** ./lib/Then/correctUrl.ts ***!
  \********************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");

const types_1 = __webpack_require__(/*! ../types */ "./lib/types.ts");

const functions_1 = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");

function register() {
  steps_1.Then(`URL is {string}`, selectorString => {
    const selector = new types_1.PageObjectSelector(selectorString);
    const url = functions_1.getNavigationUrl(selector);

    if (url) {
      cy.url().should('include', `${Cypress.config().baseUrl}/${url}`);
    }
  });
}

exports.register = register;

/***/ }),

/***/ "./lib/Then/index.ts":
/*!***************************!*\
  !*** ./lib/Then/index.ts ***!
  \***************************/
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

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const SeeTitle = __importStar(__webpack_require__(/*! ./seeTitle */ "./lib/Then/seeTitle.ts"));

const CorrectUrl = __importStar(__webpack_require__(/*! ./correctUrl */ "./lib/Then/correctUrl.ts"));

function register() {
  SeeTitle.register();
  CorrectUrl.register();
}

exports.register = register;

/***/ }),

/***/ "./lib/Then/seeTitle.ts":
/*!******************************!*\
  !*** ./lib/Then/seeTitle.ts ***!
  \******************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");

function register() {
  steps_1.Then(`I see {string} in title`, title => {
    cy.title().should('include', title);
  });
}

exports.register = register;

/***/ }),

/***/ "./lib/When/click.ts":
/*!***************************!*\
  !*** ./lib/When/click.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "core-js/modules/es.promise");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);

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


Object.defineProperty(exports, "__esModule", {
  value: true
});

const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");

const types_1 = __webpack_require__(/*! ../types */ "./lib/types.ts");

const functions_1 = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");

function register() {
  steps_1.When(`I click {string}`, async (selectorString, table) => {
    const options = table ? new types_1.ClickOptions(table.rowsHash()) : new types_1.ClickOptions({});
    const selector = new types_1.PageObjectSelector(selectorString);
    const element = functions_1.getElement(selector);
    const getOptions = functions_1.extractCommonGetOptions(options);

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
  steps_1.When(`I click blank link {string}`, (selectorString, table) => {
    const selector = new types_1.PageObjectSelector(selectorString);
    const options = table ? new types_1.BlankLinkClickOptions(table.rowsHash()) : new types_1.BlankLinkClickOptions({});
    const element = functions_1.getElement(selector);
    const getOptions = functions_1.extractCommonGetOptions(options);

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

exports.register = register;

/***/ }),

/***/ "./lib/When/hover.ts":
/*!***************************!*\
  !*** ./lib/When/hover.ts ***!
  \***************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");

const types_1 = __webpack_require__(/*! ../types */ "./lib/types.ts");

const functions_1 = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");

function register() {
  steps_1.When(`I hover element {string} without sub hovers`, selectorString => {
    const selector = new types_1.PageObjectSelector(selectorString);
    const element = functions_1.getElement(selector);

    if (element === null) {
      return;
    }

    cy.get(element).first().trigger('mouseover');
  });
}

exports.register = register;

/***/ }),

/***/ "./lib/When/index.ts":
/*!***************************!*\
  !*** ./lib/When/index.ts ***!
  \***************************/
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

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Click = __importStar(__webpack_require__(/*! ./click */ "./lib/When/click.ts"));

const See = __importStar(__webpack_require__(/*! ./see */ "./lib/When/see.ts"));

const LogIn = __importStar(__webpack_require__(/*! ./logIn */ "./lib/When/logIn.ts"));

const TypingIn = __importStar(__webpack_require__(/*! ./typingIn */ "./lib/When/typingIn.ts"));

const Hover = __importStar(__webpack_require__(/*! ./hover */ "./lib/When/hover.ts"));

function register() {
  Click.register();
  See.register();
  LogIn.register();
  TypingIn.register();
  Hover.register();
}

exports.register = register;

/***/ }),

/***/ "./lib/When/logIn.ts":
/*!***************************!*\
  !*** ./lib/When/logIn.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "core-js/modules/es.promise");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);

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



Object.defineProperty(exports, "__esModule", {
  value: true
});

const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");

const types_1 = __webpack_require__(/*! ../types */ "./lib/types.ts");

const functions_1 = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");

function register() {
  steps_1.When(`I log in at {string} as {string}`, async (selectorString, roleSelectorString) => {
    const elementSelector = new types_1.PageObjectSelector(selectorString);
    const roleSelector = new types_1.PageObjectSelector(roleSelectorString);
    const element = functions_1.getElement(elementSelector);
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

exports.register = register;

/***/ }),

/***/ "./lib/When/see.ts":
/*!*************************!*\
  !*** ./lib/When/see.ts ***!
  \*************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");

const types_1 = __webpack_require__(/*! ../types */ "./lib/types.ts");

const functions_1 = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");

function register() {
  steps_1.When(`I see (element ){string}`, (selectorString, table) => {
    const options = table ? new types_1.SeeOptions(table.rowsHash()) : new types_1.SeeOptions({});
    const selector = new types_1.PageObjectSelector(selectorString);
    const getOptions = functions_1.extractCommonGetOptions(options);
    const element = functions_1.getElement(selector, getOptions);

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

exports.register = register;

/***/ }),

/***/ "./lib/When/typingIn.ts":
/*!******************************!*\
  !*** ./lib/When/typingIn.ts ***!
  \******************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");

const types_1 = __webpack_require__(/*! ../types */ "./lib/types.ts");

const functions_1 = __webpack_require__(/*! ../../src/core/functions */ "./src/core/functions.ts");

function register() {
  steps_1.When(`I type {string} into element {string}`, (text, selectorString) => {
    const selector = new types_1.PageObjectSelector(selectorString);
    const element = functions_1.getElement(selector);

    if (element === null) {
      return;
    }

    cy.get(element).scrollIntoView().should('be.visible').type(`${text}{enter}`);
  });
}

exports.register = register;

/***/ }),

/***/ "./lib/globalHooks.ts":
/*!****************************!*\
  !*** ./lib/globalHooks.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const core_1 = __webpack_require__(/*! ../src/core */ "./src/core/index.ts");

function extractCredentials(credentials) {
  let Credentials = // eslint-disable-next-line @typescript-eslint/no-unused-vars
  class Credentials {
    constructor() {
      if (credentials) {
        Object.entries(credentials).forEach(([key, value]) => {
          this[key] = value;
        });
      }
    }

  };
  Credentials = __decorate([core_1.registerPageObject({
    name: 'Credentials',
    type: core_1.PageObjectField.RoleCredentials
  }) // eslint-disable-next-line @typescript-eslint/no-unused-vars
  , __metadata("design:paramtypes", [])], Credentials);
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

exports.register = register;

/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
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

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! reflect-metadata */ "reflect-metadata");

const Types = __importStar(__webpack_require__(/*! ./types */ "./lib/types.ts"));

const GlobalHooks = __importStar(__webpack_require__(/*! ./globalHooks */ "./lib/globalHooks.ts"));

const Then = __importStar(__webpack_require__(/*! ./Then */ "./lib/Then/index.ts"));

const When = __importStar(__webpack_require__(/*! ./When */ "./lib/When/index.ts"));

const Given = __importStar(__webpack_require__(/*! ./Given */ "./lib/Given/index.ts"));

function register() {
  Types.register();
  GlobalHooks.register();
  Given.register();
  When.register();
  Then.register();
}

exports.register = register;

/***/ }),

/***/ "./lib/types.ts":
/*!**********************!*\
  !*** ./lib/types.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

const core_1 = __webpack_require__(/*! ../src/core */ "./src/core/index.ts");

class PageObjectSelector {
  constructor(pageObjectSelector) {
    const [className, fieldName] = pageObjectSelector.split('.');
    this.fieldName = fieldName;
    this.className = className;
    const classInstance = core_1.storage.get(className);

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

exports.PageObjectSelector = PageObjectSelector;

class ElementGetOptions {
  constructor(props) {
    this.wait = null;
    this.wait = Number(props.wait) || this.wait;
  }

}

exports.ElementGetOptions = ElementGetOptions;

class ClickOptions extends ElementGetOptions {
  constructor(props) {
    super(props);
    this.first = false;
    this.force = false;
    this.first = Boolean(props.first) || this.first;
    this.force = Boolean(props.force) || this.force;
  }

}

exports.ClickOptions = ClickOptions;

class BlankLinkClickOptions extends ClickOptions {
  constructor(props) {
    super(props);
    this.customClick = false;
    this.customClick = Boolean(props.customClick) || this.customClick;
  }

}

exports.BlankLinkClickOptions = BlankLinkClickOptions;

class SeeOptions extends ElementGetOptions {
  constructor(props) {
    super(props);
    this.amount = null;
    this.amount = Number(props.amount) || this.amount;
  }

}

exports.SeeOptions = SeeOptions;

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

exports.register = register;

/***/ }),

/***/ "./src/core/functions.ts":
/*!*******************************!*\
  !*** ./src/core/functions.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

const pageObjectRegistrator_1 = __webpack_require__(/*! ./pageObjectRegistrator */ "./src/core/pageObjectRegistrator.ts");

const getElementAlias = 'getElement';

function getElement(selector, getOptions = {}) {
  const element = '@' + getElementAlias;

  switch (selector.fieldDescriptor.type) {
    case pageObjectRegistrator_1.PageObjectField.Xpath:
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cy.xpath(selector.getValue(), getOptions).as(getElementAlias);
      break;

    case pageObjectRegistrator_1.PageObjectField.Selector:
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

exports.getElement = getElement;

function getNavigationUrl(selector) {
  if (selector.fieldDescriptor.type !== pageObjectRegistrator_1.PageObjectField.Navigation) {
    throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to get URL by selector '${selector.toString()}' `);
  }

  return selector.getValue();
}

exports.getNavigationUrl = getNavigationUrl;

function extractCommonGetOptions(options) {
  const result = {};

  if (options.wait !== null && !isNaN(options.wait)) {
    result.timeout = options.wait;
  }

  return result;
}

exports.extractCommonGetOptions = extractCommonGetOptions;

function makeCypressWaitForPromise(promiseToWait) {
  return new Cypress.Promise((resolve, reject) => {
    promiseToWait.then(resolve).catch(reject);
  });
}

exports.makeCypressWaitForPromise = makeCypressWaitForPromise;

/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
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

function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(/*! ./pageObjectRegistrator */ "./src/core/pageObjectRegistrator.ts"));

var functions_1 = __webpack_require__(/*! ./functions */ "./src/core/functions.ts");

exports.makeCypressWaitForPromise = functions_1.makeCypressWaitForPromise;

/***/ }),

/***/ "./src/core/pageObjectRegistrator.ts":
/*!*******************************************!*\
  !*** ./src/core/pageObjectRegistrator.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = new Map(); // Keys should be the same as values to allow following typecheck: keyof typeof PageObjectFieldType

var PageObjectField;

(function (PageObjectField) {
  PageObjectField["Selector"] = "Selector";
  PageObjectField["Xpath"] = "Xpath";
  PageObjectField["Navigation"] = "Navigation";
  PageObjectField["RoleCredentials"] = "RoleCredentials";
})(PageObjectField = exports.PageObjectField || (exports.PageObjectField = {}));

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

    if (exports.storage.has(name)) {
      throw new Error(`Detected page object with duplicate name ${name}`);
    }

    exports.storage.set(name, classInstance);
  };
}

exports.registerPageObject = registerPageObject;

function registerSelector(type) {
  return function (target, key, descriptor) {
    const invokable = descriptor !== undefined;
    Reflect.defineMetadata(metadataTypeKey, type, target, key);
    Reflect.defineMetadata(metadataInvokableKey, invokable, target, key);
  };
}

exports.registerSelector = registerSelector;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
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

function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(/*! ./core */ "./src/core/index.ts"));

var lib_1 = __webpack_require__(/*! ../lib */ "./lib/index.ts");

exports.register = lib_1.register;

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