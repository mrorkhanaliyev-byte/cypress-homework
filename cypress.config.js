const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: "cypress/reports/html",
    overwrite: false,
  },
  e2e: {

    setupNodeEvents(on, config) {

      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  // Pulsuz demo saytlar (herokuapp) bəzən gec oyanır — terminal rejimində
  // 2 dəfə yenidən cəhd et ki, müvəqqəti yavaşlıq testi sındırmasın.
  retries: {
    runMode: 2,
    openMode: 0
  }
});
