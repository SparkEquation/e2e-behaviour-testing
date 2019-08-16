# ui-testing-template-cypress

> Based on [cypress-cucumber-example](https://github.com/TheBrainFamily/cypress-cucumber-example)

## Starting tests examples
* Clone this project
* Run `npm install`
* Run `npm run test:open` or `npm run test:run`

## Installation
* Install cypress `npm i -D cypress`
* Run it for the first time with `cypress open` to create folders structure
* **Do not modify `cypress.config` file yet**
* Install this repo:
    * From git
    ```
     npm i -D git+ssh://git@github.com/SparkEquation/ui-testing-template-cypress.git#feature/initial-config
    ```
* Check that there are no errors after installation
* Modify `baseUrl` in `cypress.config` file with url of your project
* Add script to your package.json with following content
`page-objects-import && cypress open` 
* Create feature file in `cypress/integration` folder
* `pageObjects` directory should be present there. If not - create it
* Create [page object file](#page-object-details)
* Run script and choose feature file from list
* Initial loading takes some time as code should transpile from ts

## Writing gherkin
    Check lib directory for available steps and cypress folder for examples
    Most steps expect selector as "RegisteredPageObjectName.classFieldName"

## Project structure
* `cypress` directory contains examples of tests. 
Real application would have the same directory in it's root.   
* `src` directory contains common steps and util functions that should help to keep code dry.
Real application will only have to configure cypress,
import register function into common directory and create all necessary page objects.
> TODO decide where page object directory should be in the project

## Page object details
> Can be changed over time
* Page object file should export one or more (bad practise) classes.
* Every one of them should be annotated with `@registerPageObject` directive with
one parameter `name`.
* When you are trying to resolve page object in your `.feature` classes
you address it just as you name it. **Do not use same name for multiple classes**.
* Every selector you are trying to use should be prefixed with `registerSelector`
directive with one param - type of selector.
* Type should be one of the following
  * Selector - `jquery` like selector to get element
    ```
    @registerSelector('Selector')
    public form = '#sign-in';
    ```
  * Contains - text, which element should contain 
    ```
    @registerSelector('Contains')
    public usernameElement = 'Username';
    ```
  * Navigation - plain text url used in navigation
    ```
    @registerSelector('Navigation')
    public usernameElement = 'Users/login';
    ```
  * RoleCredentials - Array of `<IRoleCredentials>` objects
    > Should be moved to config files, do not store real app credentials in git
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
  * Action - function that does all assertions and selections by itself
    > Discuss whether the implementation should be changed.  
      Right now action do not depend on step at all.
* Selector can either be simple field or function that returns an expected type.
Actions can be only functions
 
