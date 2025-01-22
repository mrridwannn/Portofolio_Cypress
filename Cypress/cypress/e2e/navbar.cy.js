/// <reference types="cypress" />

describe('Navbar test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    });

    it('Should display online banking content', () => {
        cy.contains('Online Banking').click();
        cy.url().should('include', 'online-banking.html'); // Validasi URL
        cy.get('h1').should('be.visible'); // Validasi judul halaman terlihat
        cy.get('h1').should('contain.text', 'Online Banking')
        cy.get('p').should('contain.text', 'Pay bills easily')
    });

    it('Should display feedback content', () => {
        cy.contains('Feedback').click();
        cy.url().should('include', 'feedback.html'); // Validasi URL
        cy.get('form').should('be.visible'); // Validasi form feedback terlihat
        cy.get('h3').should('contain.text', 'Feedback')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click();
        cy.url().should('include', 'index.html'); // Validasi URL
        cy.get('strong').should('contain.text', 'Home')
    });
});
