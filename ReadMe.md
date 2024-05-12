## Description:

Using Cypress, I will create a test automation framework to perform the 3t test assessment


## 1. Initialize node project and install cypress or upgrade cypress


npm init -y
Install Cypress: npm install cypress --save-dev
Upgarde Cypress: npm install cypress@latest --save-dev 
npx cypress open

Helperpage class contains all the assertions methods that can be called in the step definition class


## 3. Add BDD support (Gherkin syntax)

### Install


npm install @badeball/cypress-cucumber-preprocessor --save-dev
npm install @cypress/browserify-preprocessor --save-dev


### add to config

`cypress.config.js`

javascript
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: "Insert BaseUrl here",
    setupNodeEvents,
    specPattern: "**/*.feature",
  },
  video: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
});




### configure the cypress-cucumber-preprocessor to using global step definitions

`package.json`

javascript
  "cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true,
      "output": "cypress\\cucumberReport\\result.json"
    },
    "step_definitions": "cypress\\support\\step_definitions\\*.js",
    "nonGlobalStepDefinitions": false
  }





"scripts": {
    "cy:regressionTest": "cypress run --browser chrome --headed ",
    "cy:functionalTest": "cypress run --browser chrome --headed --env tags=@functional",
    "cy:negativeTest": "cypress run --browser chrome --headed --env tags=@negative",
    "cy:chrome:headless": "cypress run --browser chrome --headless",
    "cy:chrome:headed": "cypress run --browser chrome --headed"
}