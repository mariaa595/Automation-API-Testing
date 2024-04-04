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

Cypress.Commands.add('GETAPI', (pathParam) => {

    cy.request({
        method: 'GET',
        url: '/' + pathParam,
        headers: {

            Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
        }
    })


})

Cypress.Commands.add('PostAPI', (payload) => {

    cy.request({
        method: 'POST',
        url: '/',
        headers: {

            Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
        },
        body: payload

    })
})

Cypress.Commands.add('PutAPI', (pathParam) => {

    cy.request({
        method: 'PUT',
        url: '/' + pathParam,
        headers: {

            Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
        },
    })

})

Cypress.Commands.add('DeleteAPI', (pathParam) => {
    cy.request({
        method: 'DELETE',
        url: '/' + pathParam,
        headers: {

            Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
        },

    })
})