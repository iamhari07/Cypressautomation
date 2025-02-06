describe('KnowledgeWare Practice', () => {

    it('Practice KW site',() => {

        cy.visit('https://www.knowledgeware.in/Automation/practiceform.html')

        cy.get('input[name="fname"]').type('Test')
        cy.get('input[name="lname"]').type('User')
        cy.get('input[name="email"]').type('testuser@gmail.com')
        cy.get('input[value="male"]').check()
        cy.get('input[name="mobile"]').type('9876543210')
        cy.get('input[name="dob"]').type('1995-01-01')
        cy.get('input[name="subjects"]').type('Maths,English,Physics')
        cy.get('input[id="sports"]').check()
        cy.get('input[name="picture"]').attachFile('GFG.png')
        cy.get('textarea[name="address"]').type('Mainroad')
        cy.get('select[id="countrySelect"]').select('Karnataka')
        cy.get('select[id="citySelect"]').select('Mysore')

        cy.get('button[value="submit"]').click()
        

    })

    it('alerts', () => {

        cy.visit('https://www.knowledgeware.in/Automation/alerts.html')

        cy.get('button[onclick="alertfxn()"]').click()

        cy.on('window:alert',(p) => {

            expect(p).to.equal('You Clicked a Button')

        })

        cy.get('button[onclick="confirmbtn()"]').click()

        cy.on('window:confirm', (y) =>{

            expect(y).to.equal('Do you confirm action?')  
            
            cy.get('#print').should('have.text', 'You selected Ok!');

        })


        cy.window().then((text) =>{

            cy.stub(text,'prompt').returns('testuser')
        })
        
        cy.get('button[onclick="promptbtn()"]').click()
        cy.get('#printout').should('have.text', 'Your name is: testuser');



    })










})