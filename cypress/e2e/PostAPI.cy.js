import math from 'math.js';
import payload from '../config/payload.json';
describe('POST calls',()=>{
    function generateEmail(){
        
        const randomString = Math.random().toString(36).substring(2, 10)
        const email = randomString+"@example.com"
        return email

    }
    it(' POST CALL - JSON', () => {
        let emailadress = generateEmail();
        let payload= {
            "name": "AB Test 01",
            "email": emailadress,
            "gender": "female",
            "status": "active"
        }
        cy.log("Email address: " + emailadress)

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: "Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17"
            },
            body: payload

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name", "AB Test 01")
            expect(response.body).has.property("gender", "female")
            expect(response.body).has.property("status", "active")
            expect(response.body.id).to.not.be.null
        })


    })
    it(' POST CALL - Fixtures', () => {
        cy.fixture('users').then((responseObject) => {
            responseObject.email = generateEmail()

            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {

                    Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
                },
                body: responseObject

            }).then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body).has.property("name", "Tester 01")
                expect(response.body).has.property("gender", "female")
                expect(response.body).has.property("status", "active")
                expect(response.body.id).to.not.be.null
            })
        })
    })
    it(' POST CALL - Config', () => {
        
        payload.email = generateEmail()

            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {

                    Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
                },
                body: payload

            }).then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body).has.property("name", "Tester 01")
                expect(response.body).has.property("gender", "female")
                expect(response.body).has.property("status", "active")
                expect(response.body.id).to.not.be.null

                let id = response.body.id

                cy.request({
    
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/' + id,
                    headers: {
    
                        Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
                    }
    
                })
                    .then((response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body).has.property("name", "Tester 01")
                        expect(response.body).has.property("gender", "female")
                        expect(response.body).has.property("status", "active")
                        expect(response.body.id).to.not.be.null
    
                    })
            })
    
    })
    it(' POST CALL - Negative Case || Wrong header ', () => {
        payload.email = generateEmail()
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: 'Bearer'
            },
            body: payload,
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(401)

        })
    })
    it(' POST CALL - Negative Case || Wrong Data ', () => {
        payload.email = null
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
            },
            body: payload,
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(422)

        })
    })

    it(' POST CALL - Negative Case || Duplicate Data ', () => {
        payload.email = "abtest01@dispostable.com"
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: 'Bearer d4ad2864a53460445608e94b80d392914d1ccfb3475eb2306ceafb7433f62d17'
            },
            body: payload,
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(422)

        })
    })
})


