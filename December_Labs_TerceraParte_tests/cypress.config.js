const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false, 
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  eyesRemoveDuplicateTests: false,
  universalDebug: false,
  appliConfFile: {
    apiKey: 'nOxBinpNIi83dFyRfcbC0oOIDH8qujFWjEa102TRxnCoU110',
    batch: {
      id: 'b6fc8bb5-1c61-47f2-b896-668ee8146bef',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 63979,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
