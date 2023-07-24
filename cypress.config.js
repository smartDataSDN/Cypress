const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
        // implement node event listeners here
    },
    specPattern: ["cypress/e2e/Projects/Iframe.cy.js"],
    env: {
      baseUrl: 'https://www.zoho.com/commerce/free-demo.html',
      baseUrl1: "https://www.dummyticket.com/dummy-ticket-for-visa-application/",
      baseUrl2: "https://www.wikipedia.org/",
      baseUrl3: "https://the-internet.herokuapp.com/javascript_alerts",
      baseUrl4: "https://the-internet.herokuapp.com/iframe",
      baseUrl5: "https://demo.opencart.com/admin/index.php",
    }

    /* env: {
      dev: {
        baseUrl: 'https://www.zoho.com/commerce/free-demo.html',
      },
      stage: {
        baseUrl1: "https://www.dummyticket.com/dummy-ticket-for-visa-application",
      }
    } */
  },
});
