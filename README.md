# ui-testing-template-cypress

> Based on [cypress-cucumber-example](https://github.com/TheBrainFamily/cypress-cucumber-example)

This project is designed to quickly start e2e testing. It includes the integration of
`Cypress` with `Cucumber` and the implementation of the PageObect pattern. You just 
need to add 'Page Objects' following the [instruction below](#page-object-details).
After that, you can use `Gherkin` [statements](#writing-gherkin) After that, you can 
use Gherkin statements which are generated based on added Page Objects. Thus, writing 
and supporting tests becomes more convenient.

## Tools
The following basic tools are used in this project:
- [Cypress](https://github.com/cypress-io/cypress) - a JavaScript-based web testing 
framework that makes asynchronous testing simple, built for the modern web.
- [Cucumber](https://github.com/cucumber/cucumber-js) - a tool for running automated 
tests written in plain language.

## Starting tests examples
* Clone this project
* Run `npm install`
* Run `npm run test:open` or `npm run test:run`

## Installation
* Install this repo:
    * From git
    ```
     npm i -D git+ssh://git@github.com/SparkEquation/ui-testing-template-cypress.git
    ```
* Check that there are no errors after installation
* Set `baseUrl` in `cypress.json` file with url of your project
* Add script to your package.json with following content
`page-objects-import && cypress open` 
* Create [page object file](#page-object-details)
* Create feature file in `integration/features` folder based on `Gherkin` 
[statements](#writing-gherkin) using created page objects
* Run script and choose feature file from list
* Initial loading takes some time as code should transpile from ts
    > TODO add build step with webpack 

## Dependencies 
**Attention** this project requires nodejs version not lower than
`node 11.0.0`.    
This happens because we uses some advanced features
in postinstall script, e.g. `Array.flat`      


## Writing gherkin
### Available statements
* Given
    * `I logged in at {string} as {string}`
    * `I logged in at {string} as {string} and visit {string}`
* When
    * `I click {string}`
    * `I click blank link {string}`
    * `I hover element {string} without sub hovers`
    * `I log in at {string} as {string}`
    * `I see (element) {string}`
    * `I type {string} into element {string}`
* Then
    * `URL is {string}`
    * `I see {string} in title`

```
Check lib directory for available steps and cypress folder for examples
Most steps expect selector as "RegisteredPageObjectName.classFieldName"
```

> This list will expand over time.

## Project structure
* `integration` directory contains examples of tests, page objects
and plugin configuration to support gherkin features. 
Real application would have the same directory in it's root.   
* `dist` provides bundled code
* `lib` will be downloaded to provide autocomplete for gherkin steps
* `postinstall` contains templates of files we will import before installation
* `scripts` include some files which will be executables for your project
and postinstall script
* `src` contains functions and classes that works 'under hood'

## Environment variables
1. In order to provide application with credentials
you need to set environment variable `credentials`. We recommend doing it with
`cypress.env.json` file because it should contain JSON object of `CredentialsObject` type.
As a result `Credentials` page object will be available during tests.
 1. In order for each test to be stateless we visit start page of your application 
 in `beforeEach` cypress hook. Default value is '/' but you can override it with
 `startPage` env variable. It should contain relative to basePath url. 

## Page object details
* Page object file should export one class with any name.

* Every one of classes should be annotated with `@registerPageObject` directive with
either `name` parameter or object with `name` and optional `type` fields.

* When you are trying to resolve page object in your `.feature` files
you address the class just as you name it.
**Do not use same name for multiple classes**.
* Do not forget that `Credentials` is built in page object,
as [mentioned here](#environment-variables)  

* All class fields you are going to use in your tests should have type
which you can set for class with `type` field in params object or explicitly for
the field with `registerSelector` decorator. 
It overrides the global value if it is present 

* Selector can either be simple field or function that returns an expected type.

* Type should be one of the following
  * Selector - either simple `jquery` like selector to get element
    ```
    @registerSelector('Selector')
    public form = '#sign-in';
    ```
    or array of two elements, where the first one is selector
    and the second one is text which this element should contain
    ```
    @registerSelector('Selector')
    public header = ['h1', 'Example.com'];
    ```
    > **Attention** only one element is going to be selected if text is present   
        If you need to select multiple elements with some text use
        `:contains` pseudo class in selector instead
  * Xpath - same as `Selector` with one argument but uses xpath to select element 
      ```
      @registerSelector('Xpath')
      public menuLink = '//a[@id="menu-link"]';
      ```
  * Navigation - plain text url used in navigation
    ```
    @registerSelector('Navigation')
    public usernameElement = 'Users/login';
    ```
  * RoleCredentials - Array of `<IRoleCredentials>` objects
    You should store your credentials in env file where we automatically
    grab them and add to `Credentials` [built-in page object](#environment-variables).  
    However you can use this if you understand the risks:
    ```
    @registerSelector('RoleCredentials')
    public admin: = LogInRole = [
        {
            fieldName: 'Username',
            value: 'user@domain.com'
        },
        {
            fieldName: 'Password',
            value: 'password'
        }
    ];
    ```

 
