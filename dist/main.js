!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(3);t.PageObjectSelector=class{constructor(e){const[t,r]=e.split(".");this.fieldName=r,this.className=t,this.classInstance=n.storage.get(t),this.fieldDescriptor=this.classInstance.getFieldDescriptor(this.fieldName)}getValue(){if(this.fieldDescriptor.invokable)return this.classInstance[this.fieldName]();if(this.fieldDescriptor.type===n.PageObjectFieldType.Action)throw new Error("Action cannot be non-invokable");return this.classInstance[this.fieldName]}toString(){return`${this.className}.${this.fieldName}`}},t.register=function(){}},function(e,t){e.exports=require("cypress-cucumber-preprocessor/steps")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(3),i="getElement";t.getElement=function(e){let t="@"+i;switch(e.fieldDescriptor.type){case n.PageObjectFieldType.Contains:cy.contains(e.getValue()).as(i);break;case n.PageObjectFieldType.Selector:cy.get(e.getValue()).as(i);break;case n.PageObjectFieldType.Action:e.getValue(),t=null;break;default:throw new Error(`Incorrect field type: '${e.fieldDescriptor.type}' when trying to see element by selector '${e.toString()}' `)}return t},t.getNavigationUrl=function(e){let t;switch(e.fieldDescriptor.type){case n.PageObjectFieldType.Navigation:case n.PageObjectFieldType.Action:t=e.getValue();break;default:throw new Error(`Incorrect field type: '${e.fieldDescriptor.type}' when trying to get URL by selector '${e.toString()}' `)}return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.storage=new Map;const n="PageObjectFieldType",i="PageObjectFieldInvokable";!function(e){e.Selector="Selector",e.Contains="Contains",e.Xpath="Xpath",e.Navigation="Navigation",e.Action="Action",e.RoleCredentials="RoleCredentials"}(t.PageObjectFieldType||(t.PageObjectFieldType={})),t.registerPageObject=function(e){return r=>{const o=new class extends r{getFieldDescriptor(e){return{invokable:Reflect.getMetadata(i,this,e),type:Reflect.getMetadata(n,this,e)}}};if(cy.log(`Added ${e}`),t.storage.has(e))throw new Error(`Detected page object with duplicate name ${e}`);t.storage.set(e,o)}},t.registerSelector=function(e){return function(t,r,o){const c=void 0!==o;Reflect.defineMetadata(n,e,t,r),Reflect.defineMetadata(i,c,t,r)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.registerSelector=n.registerSelector,t.registerPageObject=n.registerPageObject,t.PageObjectFieldType=n.PageObjectFieldType;var i=r(5);t.register=i.register},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0}),r(6);const i=n(r(0)),o=n(r(7)),c=n(r(10)),s=n(r(16));t.register=function(){i.register(),s.register(),c.register(),o.register()}},function(e,t){e.exports=require("reflect-metadata")},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(8)),o=n(r(9));t.register=function(){i.register(),o.register()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.register=function(){n.Then("I see title string {string}",e=>{cy.title().should("include",e)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),i=r(0),o=r(2);t.register=function(){n.Then("URL is {string}",e=>{const t=new i.PageObjectSelector(e),r=o.getNavigationUrl(t);r&&cy.url().should("include",`${Cypress.config().baseUrl}/${r}`)})}},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(11)),o=n(r(12)),c=n(r(13)),s=n(r(14)),l=n(r(15));t.register=function(){i.register(),o.register(),c.register(),s.register(),l.register()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),i=r(0),o=r(2);t.register=function(){n.When("I click {string}",async e=>{const t=new i.PageObjectSelector(e);let r=o.getElement(t);null!==r&&cy.get(r).click()})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),i=r(0),o=r(2);t.register=function(){n.When("I see element {string}",e=>{const t=new i.PageObjectSelector(e);let r=o.getElement(t);null!==r&&cy.get(r).scrollIntoView().should("be.visible")})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),i=r(0),o=r(2);t.register=function(){n.When("I log in at {string} as {string}",async(e,t)=>{const r=new i.PageObjectSelector(e),n=new i.PageObjectSelector(t);let c=o.getElement(r);cy.get(c).within(()=>{cy.root().should("be.visible");const e=n.getValue();for(let t of e)cy.get(`input[name="${t.fieldName}"]`).type(t.value);cy.root().submit()})})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),i=r(0),o=r(2);t.register=function(){n.When("I type {string} into element {string}",(e,t)=>{const r=new i.PageObjectSelector(t);let n=o.getElement(r);null!==n&&cy.get(n).scrollIntoView().should("be.visible").type(`${e}{enter}`)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),i=r(0),o=r(2);t.register=function(){n.When("I hover element {string} without sub hovers",e=>{const t=new i.PageObjectSelector(e);let r=o.getElement(t);null!==r&&cy.get(r).first().trigger("mouseover")})}},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(17)),o=n(r(18));t.register=function(){i.register(),o.register()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),i=r(0),o=r(3);t.register=function(){n.Given("I open {string}",e=>{const t=new i.PageObjectSelector(e);switch(t.fieldDescriptor.type){case o.PageObjectFieldType.Navigation:cy.visit(t.getValue());break;case o.PageObjectFieldType.Action:t.getValue();break;default:throw new Error(`Incorrect page object selector '${t.toString()}' cannot be used to open page `)}})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),i=r(0);t.register=function(){n.Given("I logged in at {string} as {string}",(e,t)=>{const r=new i.PageObjectSelector(e),n=new i.PageObjectSelector(t),o=r.getValue(),c={};for(let e of n.getValue())c[e.fieldName]=e.value;cy.request({method:"POST",url:o,form:!0,body:c,headers:{"X-Requested-With":"XMLHttpRequest"}})})}}]);