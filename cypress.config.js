const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5jtqae',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: 'https://jet-pagination.netlify.app',
    setupNodeEvents(on, config) {

    },
  },
  env: {
    localUrl: 'http://localhost:8080'
  }
});
