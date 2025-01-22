const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
      // implement node event listeners here
      },
      // baseUrl: 'http://localhost:3000', // URL dasar untuk aplikasi yang diuji
      defaultCommandTimeout: 8000,      // Timeout untuk perintah Cypress
      pageLoadTimeout: 60000,           // Timeout saat memuat halaman
      chromeWebSecurity: false,         // Nonaktifkan keamanan browser (untuk menangani CORS)
      specPattern: 'cypress/e2e/**/*.cy.js', // Lokasi file tes
      testIsolation: false, // Menonaktifkan session dan cookies reset antara tes
      screenshotsFolder: 'cypress/screenshots',// Direktori output screenshot
      videosFolder: 'cypress/videos',// Direktori output video
  },
});
