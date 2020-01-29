# Description
This page's purpose is to explain why you may need this library, it's current state
and things we're planning to concentrate on.
    
# Why you may need this
This library's target is to simplify e2e test with the help of [cucumber](https://cucumber.io/docs).  
Instead of manually writing all the steps definitions by yourself you may
use a limited number of predefined steps to reduce boilerplate and
easily test your project's basic features like log in, navigation, modals, etc.

## Pros  
* [Fast](README.md#installation) start
* Tests can be written without knowledge of any programming language
* Easy to maintain
    * When layout has changed you only need to fix the selector in page object
* Convenient [test runner](https://docs.cypress.io/guides/core-concepts/retry-ability.html) with debugging features
    *  Cypress.io test runner has time-travel ability and useful command log
* Works great for smoke tests

## Cons  
* Only limited number of steps at the moment
* Not yet validated on complicated test cases
* Tests support typescript only right now
