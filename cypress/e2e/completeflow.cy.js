describe(' API Automation In Cypress', () => {



    it(' Using Custom Commands', () => {


        let payload = {
            "name": "tester",
            "email": "tester595@yopmail.com",
            "gender": "female",
            "status": "active"
        }


        cy.PostAPI(payload).then((response) => {
            expect(response.status).to.be.equal(201)
            let userId = response.body.id
            cy.GETAPI(userId).then((response) => {
                expect(response.status).to.be.equal(200)
            })
            cy.PutAPI(userId).then((response) => {
                expect(response.status).to.be.equal(200)
            })
            cy.DeleteAPI(userId).then((response) => {
                expect(response.status).to.be.equal(204)
            })



        })
    })



})