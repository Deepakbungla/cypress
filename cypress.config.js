const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // chromeWebSecurity: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalSessionAndOrigin: true,
  },
  env: {
    "aad_username": "deepak.bungla@aipan.tech",
    "aad_password": "Google12@3456",
    "aad_name": "AAD_NAME"
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
