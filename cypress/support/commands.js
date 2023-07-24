//import OpenCart from "../PageObjects/openCart"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clikLink', (label) => {
    cy.get('a').contains(label, { matchCase: false }).click();
})

Cypress.Commands.add('dropDown', (loc, loc1, text) => {
    cy.get(loc).each(($ele) => {
        if ($ele.text() == text) {
            cy.wrap($ele).click();
            cy.get(loc1).contains(text);

        }
    })
})

Cypress.Commands.add('Iframe', (loc) => {
    return cy.get(loc)
        .its("0.contentDocument.body")
        .should("be.visible")
        .then(cy.wrap);
})


Cypress.Commands.add('LoginPage', (locUserName, locPassword,username, password) => {
    //cy.get("#input-username").type(username);
    //cy.get("#input-password").type(password);
    cy.get(locUserName).type(username);
    cy.get(locPassword).type(password);
})