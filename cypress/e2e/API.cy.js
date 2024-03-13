// cypress/integration/apiAutomation.spec.js

describe('API Automation Test', () => {
  it('should retrieve the list of all products', () => {
    // Make a GET request to the API endpoint
    cy.request('GET', 'https://automationexercise.com/api/productsList')
      .then((response) => {
        // Validate the response status code
        expect(response.status).to.eq(200);
      })
  });
});
