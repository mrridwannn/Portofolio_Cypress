import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../page_objects/LoginPage"; // <-- Pastikan path ini benar

  Given('I visit the login page {string}', (url) => {
      cy.visit(url);
  })
  
  When('I enter the username {string} and password {string}', (username, password) => {
    LoginPage.login(username, password); // Memanggil metode login dengan username dan password
  })
  
  Then('I should be logged in successfully', () => {
    cy.url().should('include', 'account-summary')
  })
  
  Then('I should see an error message {string}', (errorMessage) => {
    cy.get('.alert-error').should('contain', errorMessage)
  })
  
  Then('I should see the {string} page', (pageName) => {
    cy.contains(pageName).should('be.visible')
  })
  
  