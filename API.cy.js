describe('API Automation',()=> {

    it('list user', () => {

        cy.request('GET','https://reqres.in/api/users?page=2').then((response) =>{

            expect(response.status).to.equal(200)
            expect(response.body.data[1].first_name).to.equal('Lindsay')
        })

    })

    it('Create user', () => {

        var userdata={
                "name": "morpheus",
                "job": "leader"
        }

        cy.request('POST','https://reqres.in/api/users',userdata).then((response) =>{

            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal(userdata.name)
            expect(response.body.job).to.equal(userdata.job)
        })

    })

    it('Update user', () => {

        var userdata1={
            "name": "apiuser",
            "job": "Automation"
        }

        cy.request('PUT','https://reqres.in/api/users/2',userdata1).then((response) =>{

            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal(userdata1.name)
            expect(response.body.job).to.equal(userdata1.job)
        })

    })

    it('Delete user', () => {

        cy.request('DELETE','https://reqres.in/api/users/2').then((response) =>{

            expect(response.status).to.equal(204)
    
        })

    })

    it('Log in User', () => {

        var logdata={
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }

        cy.request('POST','https://reqres.in/api/login',logdata).then((response) =>{

            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('token')
            
        })

    })


})