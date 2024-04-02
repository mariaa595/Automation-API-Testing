describe(' PUT CALL In Cypress', () => {


    it(' PUT CALL USing JSON', () => {
        cy.fixture('payload-put-users').then((payload) => {
            cy.request({

                method: 'PUT',
                url: 'https://gorest.co.in/public/v2/users/6819898',
                headers: {

                    Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
                },
                body: payload
            }).then((response) => {

                expect(response.status).to.be.equal(200)
                expect(response.body).has.property("name", "AB Test 01")
            })

        })
    })
})