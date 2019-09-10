// ***********************************************************
// This file is provided by e2e-behaviour-testing
// This example can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

module.exports = (on) => {
  const options = browserify.defaultOptions;
  const tsConfigPath = path.resolve('integration', 'tsconfig.json');
  options.browserifyOptions.plugin.unshift(['tsify', { project: tsConfigPath }]);

  on('file:preprocessor', cucumber(options));
};
