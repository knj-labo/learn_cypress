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

const COMMAND_DELAY = 550
export const TYPE_FIRST_PATTERN = "type first pattern";
export const TYPE_SECOND_PATTERN = "type second pattern";
export const TYPE_THIRD_PATTERN = "type third pattern";

for (const command of [
    'visit',
    'click',
    'trigger',
    'type',
    'clear',
    'reload',
    'contains',
]) {
    Cypress.Commands.overwrite(command, (originalFn, ...args) => {
        const origVal = originalFn(...args)

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(origVal)
            }, COMMAND_DELAY)
        })
    })
}

Cypress.Commands.add('submitTripleTodos', () => {
    cy.visit('http://localhost:3002/')
    cy.get('[data-cy=new-todo-input-text]')
        .type(TYPE_FIRST_PATTERN)
        .type('{enter}')
        .type(TYPE_SECOND_PATTERN)
        .type('{enter}')
        .type(TYPE_THIRD_PATTERN)
        .type('{enter}')
})