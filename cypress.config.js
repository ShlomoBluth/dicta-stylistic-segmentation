const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  projectId: 'fjz2fm',
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 10000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  failOnStatusCode: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: '',
    LIVE_URL: 'https://segment.dicta.org.il/',
    TOOL_TESTS: true,
    REQUESTS_TESTS: false,
    RECORD_KEY: '379b0181-897f-4933-a3d3-2a365c645308',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://segment.dicta.org.il/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
