describe(' Delete API Automation In Cypress', () => {

    function generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 10)
        const email = randomString + "@dispostable.com"
        return email
    }

    it(' delete user', () => {
        let emailAddress = generateRandomEmail()
        let payload = {
            "name": "AB Test 01",
            "email": emailAddress,
            "gender": "female",
            "status": "active"
        }

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
            },
            body: payload
        }).then((response) => {
            const userId = response.body.id


            cy.request({
                method: 'DELETE',
                url: 'https://gorest.co.in/public/v2/users/' + userId,
                headers: {
                    Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
                }
            })
                .then((response) => {

                    expect(response.status).to.be.equal(204)
                })
            cy.request({

                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + userId,
                headers: {
                    Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.be.equal(404)
            })
        })


    })



})