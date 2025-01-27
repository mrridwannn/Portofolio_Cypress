import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
  })
  
  When('I enter the username {string} and password {string}', (username, password) => {
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('input[name="submit"]').click()
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
  