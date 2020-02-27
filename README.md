# e2e-behaviour-testing
Clear and scalable e2e tests written in plain English
> Based on [cypress-cucumber-example](https://github.com/TheBrainFamily/cypress-cucumber-example)

This project is designed to quickly start e2e testing. It includes the integration of
`Cypress.io` with `Cucumber` and the implementation of the PageObject pattern. You just
need to add 'Page Objects' following the [instruction below](#page-object-details).
After that, you can use `Gherkin` [statements](#writing-gherkin) which are generated
 based on added Page Objects. Thus, writing and supporting tests becomes more convenient.

## Tools
The following basic tools are used in this project:
- [Cypress.io](https://github.com/cypress-io/cypress) - a JavaScript-based web testing
framework that makes asynchronous testing simple, built for the modern web.
- [Cucumber](https://github.com/cucumber/cucumber-js) - a tool for running automated
tests written in natural language.
- [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) -
a library which parses feature files and creates test cases and suites from them.

## Starting tests examples
* Clone this project
* Run `npm install`
* Run `npm run test:open` or `npm run test:run`

## Installation
* Install this repo:
    * From git
    ```
      npm i -D git+ssh://git@github.com/SparkEquation/e2e-behaviour-testing.git
    ```
* Run `e2e-bdd-copy-files` to create necessary directories and config files.
* Add script with any name, e.g. `'e2e-bdd'` to your `package.json` file with following content
`e2e-bdd-startup -c e2e/config/cypress.integration.json`
* Set `baseUrl` in `e2e/config/cypress.integration.json` file to base url of your project
* Create [page object file](#page-object-details) in `e2e/pageObjects` directory.
* Create feature file in `e2e/features` folder based on `Gherkin`
[statements](#writing-gherkin) using created page objects
* Run created script and choose feature file from list
* Initial loading takes some time because code should be transpiled from ts
    > TODO add build step with webpack

## Writing gherkin
### Disclaimer
Due to poor support of Gherkin custom types in IntelliJ IDEA,
we use `{string}` parameter instead of `{pageObjectSelector}` in our steps definitions.
In the [available statements list](#available-statements), however, we will use
the following syntax:
`{POS:Type}`
to improve semantics, reduce step definitions length and show constraints.
Available types are listed in page object's details [section](#page-object-details).

### Available statements
* Given
    * `I logged in at {ApiUrl} as {Role} and visit {PageUrl}`
        * Api url: `POS:Navigation` - log in post endpoint
        * Role: `POS:RoleCredentials` - credentials for desired role
        * Page url: `POS:Navigation` - page to visit after authorization
        Sends post request to endpoint to obtain credentials for current test case
            > TODO: add limitations list
    * `I logged in at {ApiUrl} as {Role}`
        Same as above but do not navigate, stays at the start page
    * `I open page {PageUrl}`
        * Page url: `POS:Navigation` - page to visit
* When
    * `I click {Element}`
        * Element: `POS:Selector | POS:Xpath` - selector of element on the page
    * `I click blank link {LinkElement}`
        * LinkElement: `POS:Selector | POS:Xpath` - clickable element which opens blank page
        This action moved to a separate step definition because of the way how
        cypress handles opening new tab
    * `I hover element {HoverableElement} without sub hovers`
        * Hoverable Element: `POS:Selector | POS:Xpath`
        Right now hover cannot be invoked on element which is shown
        as a result of another hover action
    * `I log in at {Form} as {Role}`
        * Form: `POS:Selector | POS:Xpath` - selector of form element
        Finds form, fills it in with given credentials and submits it
    * `I see (element) {Element}`
    * `I type {string} into element {Element}`
* Then
    * `URL is {PageUrl}`
    * `I see {string} in title`

```
Check lib directory for available steps and cypress folder for examples
Most steps expect selector as "RegisteredPageObjectName.classFieldName"
```

> This list will expand and may change over time.

## Project structure
* `e2e` directory contains examples of tests, page objects
and plugin configuration to support gherkin features.
Real application would have the same directory in it's root.
* `dist` provides bundled code
    > TODO delete from git when published to npm
* `src` Contains source code
    * `scripts` include some files which will be executables for your project
    * `core` contains functions and classes that works 'under the hood'
    * `util` contains utils functions
* `lib` Source code that will be downloaded on installation to provide step definitions
* `postinstall` contains templates of files that can be copied to project


## Environment variables
1. In order to provide application with credentials
you need to set environment variable `credentials`. We recommend doing it with
`cypress.env.json` file because it should contain JSON object of `CredentialsObject` type
and should never be pushed to any VCS.
As a result `Credentials` page object will be accessible in feature flies.
 1. In order for each test to be stateless we visit start page of your application
 in `beforeEach` cypress hook. Default value is '/' but you can override it with
 `startPage` env variable. It should contain relative to basePath url.

## Page object details
* Page object file should have one (recommended) class.

* Every one of classes should be annotated with `@registerPageObject` directive.
    Page object name (how you would access it in feature files) can be set up
    * If `registerPageObject` directive don't have params your page object will be available by class name
    * If the directive's param is string - it will be used as page object name
    * If directive's param is object - name field will be used as PO name, if exists. Class name otherwise.

* When you are trying to resolve page object in your `.feature` files
you address the page object just as you name it.
**Do not use same name for multiple classes**.
* Do not forget that `Credentials` is built-in page object,
as [mentioned here](#environment-variables)

* All class fields you are going to use in your tests should have type.
You can set class-global type with self-titled param of `registerPageObject` decorator
or decorate your field \ method with `registerSelector` decorator, which overrides
the global value if it is present.

* Selector can either be simple field or function that returns an expected type.

* Type should be one of the following
  * Selector - either simple `jquery` like selector to get element
    ```typescript
    @registerSelector('Selector')
    public form = '#sign-in';
    ```
    or array of two elements, where the first one is selector
    and the second one is text which this element should contain
    ```typescript
    @registerSelector('Selector')
    public header = ['h1', 'Example.com'];
    ```
    > **Attention** only one element is going to be selected if text is present
        If you need to select multiple elements with some text use
        `:contains` pseudo class in selector instead
  * Xpath - same as `Selector` with one argument but uses xpath to select element
      ```typescript
      @registerSelector('Xpath')
      public menuLink = '//a[@id="menu-link"]';
      ```
  * Navigation - plain text url used in navigation
    ```typescript
    @registerSelector('Navigation')
    public usernameElement = 'Users/login';
    ```
  * RoleCredentials - Array of `<IRoleCredentials>` objects
    You should store your credentials in env file where we automatically
    grab them and add to `Credentials` [built-in page object](#environment-variables).
    However you can use the following example if you understand the risks:
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

## Examples
Let's assume you have [installed](#installation) the library and created the following feature file

```gherkin
Feature: My first feature
    Scenario: Visit start page
      Given I open "ExampleDomain.IndexPage"
      Then I see "Example Domain" in title
      And URL is "ExampleDomain.IndexPage"
```

To successfully run it you need to do the following steps:
* Set base url to `https://example.com`
* [Create pageObject file](#page-object-details) with following content (without imports):
```typescript
    @registerPageObject('ExampleDomain')
    export class ExampleDomainClass {
        @registerSelector('Navigation')
        IndexPage: string = ''
    }
```
* Run`e2e-bdd-startup && cypress open`
* Choose your file from list and click it
