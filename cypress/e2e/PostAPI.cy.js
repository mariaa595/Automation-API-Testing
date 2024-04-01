import math from 'math.js';
describe('POST calls',()=>{
    function generateEmail(){
        
        const randomString = Math.random().toString(36).substring(2, 10)
        const email = randomString+"@example.com"
        return email

    }
    it(' POST CALL - JSON', () => {
        let emailadress = generateEmail();
        cy.log("Email address: " + emailadress)

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: "Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17"
            },
            body: {
                "name": "AB Test 01",
                "email": emailadress,
                "gender": "female",
                "status": "active"
            }

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name", "AB Test 01")
            expect(response.body).has.property("gender", "female")
            expect(response.body).has.property("status", "active")
            expect(response.body.id).to.not.be.null
        })


    })
})