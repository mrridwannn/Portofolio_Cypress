/// <reference types="cypress" />

describe('Searchbox Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });

    it('Should show search result page', () => {
        cy.url().should('include', '/search.html?searchTerm=online')

        cy.get('h2').should('contain.text', 'Search Results:')
        cy.get('div.top_offset').should('contain.text', 'The following pages were found for the query: online')
        cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get('a').should('contain.text', 'Zero - Online Statements')
    });
})