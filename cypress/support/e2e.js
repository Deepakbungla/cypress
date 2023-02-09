// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

function loginViaAAD(username, password) {
    console.log(username);
    cy.visit('https://teamplus.udyamo.com');
    cy.contains('Sign in with Microsoft').click();
    // cy.contains('Sign in using Popup').click();

    cy.wait(8000);

    cy.origin('https://login.microsoftonline.com/common/', () => {
            // cy.get('input[type="email"]').type(username)
            // cy.get('input[type="submit"]').click()
            cy.contains('Sign in')
        })

    // cy.origin(
    //     'login.live.com',
    //     {
    //         args: {
    //             password,
    //         },
    //     },
    //     ({ password }) => {
    //         cy.get('input[type="password"]').type(password, {
    //             log: false,
    //         })
    //         cy.get('input[type="submit"]').click()
    //         cy.get('#idBtn_Back').click()
    //     }
    // )

    cy.url().should('equal', 'https://teamplus.udyamo.com/')

}

Cypress.Commands.add('login', (username, password) => {
    const log = Cypress.log({
        displayName: 'Azure Active Directory Login',
        message: [`🔐 Authenticating | ${username}`],
        autoEnd: false,
    })

    loginViaAAD(username, password)
})