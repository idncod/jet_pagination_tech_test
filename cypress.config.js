const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: 'vor6iz',
  e2e: {
    baseUrl: 'https://jet-pagination.netlify.app',
    setupNodeEvents(on, config) {
    },
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },

  env: {
    localUrl: 'http://localhost:8080',
    CYPRESS_RECORD_KEY: process.env.CYPRESS_RECORD_KEY,
  }
});
