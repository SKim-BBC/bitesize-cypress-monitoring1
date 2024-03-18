const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mocha-multi-reporters',
  viewportWidth: 1440,
  viewportHeight: 900,
  reporterOptions: {
    configFile: 'mocha-config.json',
  },
  screenshotOptions: {
    trashAssetsBeforeRuns: false,
    screenshotOnRunFailure: true,
    capture: 'runner',
  },
  screenshotsFolder: 'results/screenshots',
  defaultCommandTimeout: 15000,
  blockHosts: ['a1.api.bbc.co.uk', 'a2.api.bbc.co.uk', 'optimizely.com'],
  video: false,
  numberOfTestsKeptInMemory: 1,
  retries: 2,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: './/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://www.test.bbc.co.uk/bitesize',
  },
})