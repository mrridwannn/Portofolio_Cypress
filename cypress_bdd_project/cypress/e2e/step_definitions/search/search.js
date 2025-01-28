import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SearchPage from "../../page_objects/SearchPage"; // <-- Pastikan path ini benar

Given("I am on the homepage {string}", (url) => {
  cy.visit(url);
});

When("I enter the keyword {string} in the search bar", (keyword) => {
  SearchPage.searchForKeyword(keyword);
});

When("I press the {string} key", function (keyword) {
  SearchPage.pressEnter(keyword);
});

Then("The page will display search results relevant to the keyword {string}", (keyword) => {
  cy.wait(3000);
  cy.get('div.top_offset').should("contain", keyword);
});

Then("The page will display a message {string}", (message) => {
  cy.wait(3000);
  cy.get('div.top_offset').should("contain", message);
});