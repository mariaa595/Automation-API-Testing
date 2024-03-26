// cypress/integration/apiAutomation.spec.js

describe('API Automation Test', () => {
  it('should retrieve the list of all products', () => {
    // Make a GET request to the API endpoint
    cy.request({
      method:'GET', 
      url:'https://automationexercise.com/api/productsList'
    
    })
      .then((response) => {
        cy.log(JSON.stringify(response))
        // Validate the response status code
        expect(response.status).to.eq(200);
      })
  })
  it('GET Users',()=>{
    cy.request({
      method:'GET', 
      url:'https://gorest.co.in/public/v2/users/',
      headers:{
        Autorization:"d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17"
      }
    })
    .then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.eq(200);
  })
})
it('Individual User',()=>{
  cy.request({
    method:'GET', 
    url:'https://gorest.co.in/public/v2/users/6805319',
    headers:{
      Autorization:"d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17"
    }
  })
  .then((response) => {
    cy.log(JSON.stringify(response))
    expect(response.status).to.eq(200)
    expect(response.body.id).to.eq(6805319)
})
})
it('GET USER - Invalid URL',()=>{
  cy.request({
    method:'GET', 
    url:'https://gorest.co.in/public/v2/user',
    headers:{
      Autorization:"d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17"
    },
    failOnStatusCode: false
  })
  .then((response) => {
    cy.log(JSON.stringify(response))
    expect(response.status).to.eq(404)
    
})
})
it('GET USER - Invalid User',()=>{
  cy.request({
    method:'GET', 
    url:'https://gorest.co.in/public/v2/users/23243',
    headers:{
      Autorization:"d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17"
    },
    failOnStatusCode: false
  })
  .then((response) => {
    cy.log(JSON.stringify(response))
    expect(response.status).to.eq(404)
    
})
})
});
