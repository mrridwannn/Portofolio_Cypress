import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "http://zero.webappsecurity.com/index.html";

Given("I am on the homepage {string}", (url) => {
  cy.visit(url);
  cy.url().should("eq", baseUrl);
});

When("I enter the keyword {string} in the search bar", (keyword) => {
  cy.get("#searchTerm").type(keyword);
});

When("I press the {string} key", (key) => {
    if (key.toLowerCase() === "enter") {
      cy.get("#searchTerm").type('{enter}'); // Simulate pressing "Enter"
    }
  });

Then("The page will display search results relevant to the keyword {string}", (keyword) => {
  cy.get("h2").should("contain", "Search Results");
  cy.get("body").should("contain", keyword);
});

Then("The page will display a message {string} or results indicating no search results", (message) => {
  cy.get("h2").should("contain", "Search Results");
  cy.get("div.top_offset").should("contain", "No results were found for the query:");
});
