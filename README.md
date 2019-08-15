# ui-testing-template-cypress

> Based on [cypress-cucumber-example](https://github.com/TheBrainFamily/cypress-cucumber-example)

## Starting tests examples
* Clone this project
* Run `npm install`
* Run `npm run test:open` or `npm run test:run`

## Installation
* Install cypress `npm i -D cypress`
* Run it for the first time with `cypress open`,
* Install this repo


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
* Every one of them should be annotated with `registerPageObject` directive with
one parameter `name`.
* When you are trying to resolve page object in your `.feature` classes
you address it just as you name it. **Do not use same name for multiple classes**.
* Every selector you are trying to use should be prefixed with `registerSelector`
directive with one param - type of selector.
* Type should be one of the following
  * Selector - `jquery` like selector to get element
  * Contains - text, which element should contain 
  * Navigation - plain text url used in navigation
  * Action - function that does all assertions and selections by itself
    > Discuss whether the implementation should be changed.  
      Right now action do not depend on step at all.
* Selector can either be simple field or function that returns an expected type.
Actions can be only functions
 
