describe('demoqa',() => {

    it('demoQA test',() =>{

        cy.visit('https://demo.automationtesting.in/Register.html')

        cy.get('#basicBootstrapForm').within(()=>{

            cy.get('input[placeholder="First Name"]').type('Adam')
            cy.get('input[placeholder="Last Name"]').type('James')
            cy.get('textarea[ng-model="Adress"]').type('Main street')
            cy.get('input[ng-model="EmailAdress"]').type('testuser123@gmail.com')
            cy.get('input[ng-model="Phone"]').type('9876543210')
            cy.get('input[value="Male"]').check()
            cy.get('input[value="Cricket"]').check()
           cy.get('#msdd').click()
            cy.get('a.ui-corner-all').contains('English').click()
            cy.get('#Skills').select('Data Analytics')
            //cy.get('#countries').select('India')
            cy.get('.select2-selection').click();
            //cy.get('input[type="search"]').type('India')
            cy.get('input[type="search"]').should('be.visible')
            cy.get('input[type="search"]').type('India{enter}')
            cy.get('#yearbox').select('1994')
            cy.get('select[ng-model="monthbox"]').select('March')
            cy.get('#daybox').select('20')
            cy.get('input[id="firstpassword"]').type('Password@123')
            cy.get('input[id="secondpassword"]').type('Password@123')

            cy.get('input[id="imagesrc"]').attachFile('Burp.png') //uploading file
            
            cy.get('button[value="sign up"]').click()


        })

        it('alerts', () => {

            cy.visit('https://demo.automationtesting.in/Register.html')

            cy.get('a[href="SwitchTo.html"]').click()
            cy.get('a[href="Alerts.html"]').click()
            cy.get('button[onclick="alertbox()"]').click()
           
            cy.on('window:alert',(p) => {
                expect(p).to.equal('I am an alert box!') //with ok button
            })

            cy.get('a[href="#CancelTab"]').click()
            cy.get('button[onclick="confirmbox()"]').click()
            
            cy.on('window:confirm',(u) => {
                expect(u).to.equal('Press a button!') //with cancel button
            })
        })

            



    })



})
