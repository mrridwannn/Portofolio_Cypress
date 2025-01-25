/// <reference types="cypress" />

describe('Login/ Logout Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
    });

    it('Should Verify User Login Successfully', () => {
        cy.fixture('user.json').then(user => {

            const data = user.find(user => user.username === "standard_user")
        
            const username = data.username
            const password = data.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('input[name="login-button"]').click()

            cy.get('div.app_logo').should('contain', 'Swag Labs')
        });
    });

    it('Should Verify User Login Failed - User Locked', () => {
        cy.fixture('user.json').then(user => {

            const data = user.find(user => user.username === "locked_out_user")
        
            const username = data.username
            const password = data.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('input[name="login-button"]').click()

            cy.get('h3').should('be.visible').and('contain', 'Epic sadface: Sorry, this user has been locked out.')
        });
    });

    it('Should Verify User Login Failed - User Problem', () => {
        cy.fixture('user.json').then(user => {

            const data = user.find(user => user.username === "problem_user")
        
            const username = data.username
            const password = data.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('input[name="login-button"]').click()
        });

    });

    it('Should Verify User Login Failed - Empty Fields', () => {
        cy.get('#user-name').should('be.visible')
        cy.get('#user-name')
        cy.get('#password')
        cy.get('input[name="login-button"]').click()

        cy.get('h3').should('be.visible').and('contain', 'Epic sadface: Username is required')
    });

    it('Should Verify User Login Failed - Wrong Password', () => {
        cy.get('#user-name').should('be.visible')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('wrong')
        cy.get('input[name="login-button"]').click()

        cy.get('h3').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Should Verify User Logout Successfully', () => {
        cy.fixture('user.json').then(user => {
            const data = user.find(user => user.username === "standard_user")
        
            const username = data.username
            const password = data.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('input[name="login-button"]').click()

            cy.get('div.app_logo').should('contain', 'Swag Labs')
            cy.get('div.bm-burger-button').click()
            cy.get('#logout_sidebar_link').click()
            cy.url().should('include', 'https://www.saucedemo.com/')
        });
    });

});

describe('Sorting Product', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
    });

    it('Should Verify User Login Successfully', () => {
        cy.fixture('user.json').then(user => {

            const data = user.find(user => user.username === "standard_user")
        
            const username = data.username
            const password = data.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('input[name="login-button"]').click()

            cy.get('div.app_logo').should('contain', 'Swag Labs')
        });
    });

    it('Should Verify Sorting works as intendeed', () => {
        cy.get('select[data-test="product-sort-container"]').select('az')
        cy.get('select[data-test="product-sort-container"]').select('za')
        cy.get('select[data-test="product-sort-container"]').select('lohi')
        cy.get('select[data-test="product-sort-container"]').select('hilo')
    });
});

describe('Add To Cart', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
    });

    it('Should Verify User Login Successfully', () => {
        cy.fixture('user.json').then(user => {

            const data = user.find(user => user.username === "standard_user")
        
            const username = data.username
            const password = data.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('input[name="login-button"]').click()

            cy.get('div.app_logo').should('contain', 'Swag Labs')
        });
    });

    it('Should Verify Success Add Product(s) to the Cart', () => {
        cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('button[data-test="remove-sauce-labs-backpack"]').should('contain.text', 'Remove')
    });

    it('Should Verify to Display Selected Product in Cart', () => {
        cy.get('a[data-test="shopping-cart-link"]').click()
        cy.get('div.inventory_item_name').should('contain', 'Sauce Labs Backpack')
    });

    it('Should Verify to Display Detail Info of Selected Product', () => {
        cy.get('div.inventory_item_name').click()
        cy.get('div[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack')
        cy.get('div[data-test="inventory-item-desc"]').should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        cy.get('div[data-test="inventory-item-price"]').should('contain', '$29.99')

        cy.get('button[data-test="back-to-products"]').click()
        cy.get('a[data-test="shopping-cart-link"]').click()
    });

    it('Should Verify Success Access Checkout Page', () => {
        cy.get('button[data-test="checkout"]').click()
        cy.get('span.title').should('contain', 'Checkout: Your Information')

        cy.fixture('buyer_data.json').then(buyer => {

            const buyer_data = buyer.find(buyer => buyer.first_name === "Muhamad")
        
            const first_name = buyer_data.first_name
            const last_name = buyer_data.last_name
            const postal_code = buyer_data.postal_code

            cy.get('#first-name').clear()
            cy.get('#first-name').type(first_name)
            cy.get('#last-name').clear()
            cy.get('#last-name').type(last_name)
            cy.get('#postal-code').clear()
            cy.get('#postal-code').type(postal_code)

            cy.get('input[data-test="continue"]').click()
            cy.get('span.title').should('contain', 'Checkout: Overview')
            cy.get('button[data-test="finish"]').click()
            cy.get('h2.complete-header').should('contain', 'Thank you for your order!')

        });
    });
});