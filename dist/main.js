(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ui-testing-template"] = factory();
	else
		root["ui-testing-template"] = factory();
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

/***/ "./src/gherkinFunctions/Given/index.ts":
/*!*********************************************!*\
  !*** ./src/gherkinFunctions/Given/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const OpenPage = __importStar(__webpack_require__(/*! ./openPage */ "./src/gherkinFunctions/Given/openPage.ts"));
const LoggedIn = __importStar(__webpack_require__(/*! ./loggedIn */ "./src/gherkinFunctions/Given/loggedIn.ts"));
function register() {
    OpenPage.register();
    LoggedIn.register();
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/Given/loggedIn.ts":
/*!************************************************!*\
  !*** ./src/gherkinFunctions/Given/loggedIn.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
const types_1 = __webpack_require__(/*! ../types */ "./src/gherkinFunctions/types.ts");
function register() {
    steps_1.Given(`I logged in at {string} as {string}`, (navigationSelectorString, roleSelectorString) => {
        const navigationSelector = new types_1.PageObjectSelector(navigationSelectorString);
        const roleSelector = new types_1.PageObjectSelector(roleSelectorString);
        const url = navigationSelector.getValue();
        const requestBody = {};
        for (let field of roleSelector.getValue()) {
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
        });
    });
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/Given/openPage.ts":
/*!************************************************!*\
  !*** ./src/gherkinFunctions/Given/openPage.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
const types_1 = __webpack_require__(/*! ../types */ "./src/gherkinFunctions/types.ts");
const pageObjectRegistrator_1 = __webpack_require__(/*! ../../pageObjectRegistrator */ "./src/pageObjectRegistrator.ts");
function register() {
    steps_1.Given(`I open {string}`, (selectorString) => {
        const selector = new types_1.PageObjectSelector(selectorString);
        switch (selector.fieldDescriptor.type) {
            case pageObjectRegistrator_1.PageObjectFieldType.Navigation:
                cy.visit(selector.getValue());
                break;
            case pageObjectRegistrator_1.PageObjectFieldType.Action:
                selector.getValue();
                break;
            default:
                throw new Error(`Incorrect page object selector '${selector.toString()}' cannot be used to open page `);
        }
    });
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/Then/correctUrl.ts":
/*!*************************************************!*\
  !*** ./src/gherkinFunctions/Then/correctUrl.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
const types_1 = __webpack_require__(/*! ../types */ "./src/gherkinFunctions/types.ts");
const functions_1 = __webpack_require__(/*! ../../util/functions */ "./src/util/functions.ts");
function register() {
    steps_1.Then(`URL is {string}`, (selectorString) => {
        const selector = new types_1.PageObjectSelector(selectorString);
        const url = functions_1.getNavigationUrl(selector);
        if (url) {
            cy.url().should('include', `${Cypress.config().baseUrl}/${url}`);
        }
    });
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/Then/index.ts":
/*!********************************************!*\
  !*** ./src/gherkinFunctions/Then/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const SeeTitle = __importStar(__webpack_require__(/*! ./seeTitle */ "./src/gherkinFunctions/Then/seeTitle.ts"));
const CorrectUrl = __importStar(__webpack_require__(/*! ./correctUrl */ "./src/gherkinFunctions/Then/correctUrl.ts"));
function register() {
    SeeTitle.register();
    CorrectUrl.register();
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/Then/seeTitle.ts":
/*!***********************************************!*\
  !*** ./src/gherkinFunctions/Then/seeTitle.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
function register() {
    steps_1.Then(`I see title string {string}`, (title) => {
        cy.title().should("include", title);
    });
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/When/click.ts":
/*!********************************************!*\
  !*** ./src/gherkinFunctions/When/click.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
const types_1 = __webpack_require__(/*! ../types */ "./src/gherkinFunctions/types.ts");
const functions_1 = __webpack_require__(/*! ../../util/functions */ "./src/util/functions.ts");
function register() {
    steps_1.When(`I click {string}`, async (selectorString) => {
        const selector = new types_1.PageObjectSelector(selectorString);
        let element = functions_1.getElement(selector);
        if (element === null) {
            return;
        }
        cy.get(element).click();
    });
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/When/hover.ts":
/*!********************************************!*\
  !*** ./src/gherkinFunctions/When/hover.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
const types_1 = __webpack_require__(/*! ../types */ "./src/gherkinFunctions/types.ts");
const functions_1 = __webpack_require__(/*! ../../util/functions */ "./src/util/functions.ts");
function register() {
    steps_1.When(`I hover element {string} without sub hovers`, (selectorString) => {
        const selector = new types_1.PageObjectSelector(selectorString);
        let element = functions_1.getElement(selector);
        if (element === null) {
            return;
        }
        cy.get(element).first().trigger('mouseover');
    });
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/When/index.ts":
/*!********************************************!*\
  !*** ./src/gherkinFunctions/When/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Click = __importStar(__webpack_require__(/*! ./click */ "./src/gherkinFunctions/When/click.ts"));
const See = __importStar(__webpack_require__(/*! ./see */ "./src/gherkinFunctions/When/see.ts"));
const LogIn = __importStar(__webpack_require__(/*! ./logIn */ "./src/gherkinFunctions/When/logIn.ts"));
const TypingIn = __importStar(__webpack_require__(/*! ./typingIn */ "./src/gherkinFunctions/When/typingIn.ts"));
const Hover = __importStar(__webpack_require__(/*! ./hover */ "./src/gherkinFunctions/When/hover.ts"));
function register() {
    Click.register();
    See.register();
    LogIn.register();
    TypingIn.register();
    Hover.register();
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/When/logIn.ts":
/*!********************************************!*\
  !*** ./src/gherkinFunctions/When/logIn.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
const types_1 = __webpack_require__(/*! ../types */ "./src/gherkinFunctions/types.ts");
const functions_1 = __webpack_require__(/*! ../../util/functions */ "./src/util/functions.ts");
function register() {
    steps_1.When(`I log in at {string} as {string}`, async (selectorString, roleSelectorString) => {
        const elementSelector = new types_1.PageObjectSelector(selectorString);
        const roleSelector = new types_1.PageObjectSelector(roleSelectorString);
        let element = functions_1.getElement(elementSelector);
        cy.get(element).within(() => {
            cy.root().should('be.visible');
            const credentials = roleSelector.getValue();
            for (let field of credentials) {
                cy.get(`input[name="${field.fieldName}"]`).type(field.value);
            }
            cy.root().submit();
        });
    });
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/When/see.ts":
/*!******************************************!*\
  !*** ./src/gherkinFunctions/When/see.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
const types_1 = __webpack_require__(/*! ../types */ "./src/gherkinFunctions/types.ts");
const functions_1 = __webpack_require__(/*! ../../util/functions */ "./src/util/functions.ts");
function register() {
    steps_1.When(`I see element {string}`, (selectorString) => {
        const selector = new types_1.PageObjectSelector(selectorString);
        let element = functions_1.getElement(selector);
        if (element === null) {
            return;
        }
        cy.get(element)
            .scrollIntoView()
            .should('be.visible');
    });
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/When/typingIn.ts":
/*!***********************************************!*\
  !*** ./src/gherkinFunctions/When/typingIn.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const steps_1 = __webpack_require__(/*! cypress-cucumber-preprocessor/steps */ "cypress-cucumber-preprocessor/steps");
const types_1 = __webpack_require__(/*! ../types */ "./src/gherkinFunctions/types.ts");
const functions_1 = __webpack_require__(/*! ../../util/functions */ "./src/util/functions.ts");
function register() {
    steps_1.When(`I type {string} into element {string}`, (text, selectorString) => {
        const selector = new types_1.PageObjectSelector(selectorString);
        let element = functions_1.getElement(selector);
        if (element === null) {
            return;
        }
        cy.get(element)
            .scrollIntoView()
            .should('be.visible')
            .type(`${text}{enter}`);
    });
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/index.ts":
/*!***************************************!*\
  !*** ./src/gherkinFunctions/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const Types = __importStar(__webpack_require__(/*! ./types */ "./src/gherkinFunctions/types.ts"));
const Then = __importStar(__webpack_require__(/*! ./Then */ "./src/gherkinFunctions/Then/index.ts"));
const When = __importStar(__webpack_require__(/*! ./When */ "./src/gherkinFunctions/When/index.ts"));
const Given = __importStar(__webpack_require__(/*! ./Given */ "./src/gherkinFunctions/Given/index.ts"));
function register() {
    Types.register();
    Given.register();
    When.register();
    Then.register();
}
exports.register = register;


/***/ }),

/***/ "./src/gherkinFunctions/types.ts":
/*!***************************************!*\
  !*** ./src/gherkinFunctions/types.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const pageObjectRegistrator_1 = __webpack_require__(/*! ../pageObjectRegistrator */ "./src/pageObjectRegistrator.ts");
class PageObjectSelector {
    constructor(pageObjectSelector) {
        const [className, fieldName] = pageObjectSelector.split('.');
        this.fieldName = fieldName;
        this.className = className;
        this.classInstance = pageObjectRegistrator_1.storage.get(className);
        this.fieldDescriptor = this.classInstance.getFieldDescriptor(this.fieldName);
    }
    getValue() {
        if (this.fieldDescriptor.invokable) {
            return this.classInstance[this.fieldName]();
        }
        else {
            if (this.fieldDescriptor.type === pageObjectRegistrator_1.PageObjectFieldType.Action) {
                throw new Error('Action cannot be non-invokable');
            }
            return this.classInstance[this.fieldName];
        }
    }
    toString() {
        return `${this.className}.${this.fieldName}`;
    }
}
exports.PageObjectSelector = PageObjectSelector;
function register() {
    // TODO uncomment it as soon as https://github.com/cucumber/cucumber-js/issues/1221 is resolved
    /*defineParameterType({
        name: 'pageObjectSelector',
        preferForRegexpMatch: true,
        useForSnippets: true,
        regexp: /.*!/,
        transformer: selector => new PageObjectSelector(selector)
    });*/
}
exports.register = register;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var pageObjectRegistrator_1 = __webpack_require__(/*! ./pageObjectRegistrator */ "./src/pageObjectRegistrator.ts");
exports.registerSelector = pageObjectRegistrator_1.registerSelector;
exports.registerPageObject = pageObjectRegistrator_1.registerPageObject;
exports.PageObjectFieldType = pageObjectRegistrator_1.PageObjectFieldType;
var gherkinFunctions_1 = __webpack_require__(/*! ./gherkinFunctions */ "./src/gherkinFunctions/index.ts");
exports.register = gherkinFunctions_1.register;
__export(__webpack_require__(/*! util */ "util"));


/***/ }),

/***/ "./src/pageObjectRegistrator.ts":
/*!**************************************!*\
  !*** ./src/pageObjectRegistrator.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = new Map();
const metadataTypeKey = 'PageObjectFieldType';
const metadataInvokableKey = 'PageObjectFieldInvokable';
// Keys should be the same as values to allow following typecheck: keyof typeof PageObjectFieldType
var PageObjectFieldType;
(function (PageObjectFieldType) {
    PageObjectFieldType["Selector"] = "Selector";
    PageObjectFieldType["Contains"] = "Contains";
    // TODO implement
    PageObjectFieldType["Xpath"] = "Xpath";
    PageObjectFieldType["Navigation"] = "Navigation";
    // Cypress chainable
    PageObjectFieldType["Action"] = "Action";
    PageObjectFieldType["RoleCredentials"] = "RoleCredentials";
})(PageObjectFieldType = exports.PageObjectFieldType || (exports.PageObjectFieldType = {}));
function registerPageObject(name) {
    // TODO replace any with valid type
    return (constructor) => {
        const classInstance = new class C extends constructor {
            getFieldDescriptor(key) {
                return {
                    invokable: Reflect.getMetadata(metadataInvokableKey, this, key),
                    type: Reflect.getMetadata(metadataTypeKey, this, key)
                };
            }
        };
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

/***/ "./src/util/functions.ts":
/*!*******************************!*\
  !*** ./src/util/functions.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const pageObjectRegistrator_1 = __webpack_require__(/*! ../pageObjectRegistrator */ "./src/pageObjectRegistrator.ts");
const getElementAlias = 'getElement';
function getElement(selector) {
    let element = '@' + getElementAlias;
    switch (selector.fieldDescriptor.type) {
        case pageObjectRegistrator_1.PageObjectFieldType.Contains:
            cy.contains(selector.getValue()).as(getElementAlias);
            break;
        case pageObjectRegistrator_1.PageObjectFieldType.Selector:
            cy.get(selector.getValue()).as(getElementAlias);
            break;
        case pageObjectRegistrator_1.PageObjectFieldType.Action:
            selector.getValue();
            element = null;
            break;
        default:
            throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to see element by selector '${selector.toString()}' `);
    }
    return element;
}
exports.getElement = getElement;
function getNavigationUrl(selector) {
    let url;
    switch (selector.fieldDescriptor.type) {
        case pageObjectRegistrator_1.PageObjectFieldType.Navigation:
        case pageObjectRegistrator_1.PageObjectFieldType.Action:
            url = selector.getValue();
            break;
        default:
            throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to get URL by selector '${selector.toString()}' `);
    }
    return url;
}
exports.getNavigationUrl = getNavigationUrl;


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

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map