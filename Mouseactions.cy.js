describe('Mouse actions', () => {

    it('Mouseover', () =>{

        cy.visit('https://demo.opencart.com/')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").should('be.visible')


    })

    it('Right click', () =>{

        cy.visit('https://practice.expandtesting.com/context-menu')
        
        /*cy.get('#hot-spot').trigger('contextmenu') //Method 1
        cy.on('window:alert',(p) =>{

            expect(p).to.equal('You selected a context menu')
        })*/

        cy.get('#hot-spot').rightclick() //Method 2
        cy.on('window:alert',(p) =>{

            expect(p).to.equal('You selected a context menu')
        })

    })

    it('Double Click', () =>{

        cy.visit('https://qa-practice.netlify.app/double-click')

        //cy.get('#double-click-btn').trigger('dblclick')  // Method 1

        cy.get('#double-click-btn').dblclick()  // Method 2

        cy.get('#double-click-result').should('have.text','Congrats, you double clicked!')



    })

    it('Drag and Drop', () =>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#draggable').drag('#droppable', { force: true })

        cy.get('#droppable').should('contain', 'Dropped!')


    })

    it('Scroll', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#comboBox').click()

        cy.get('#dropdown').contains('Item 24').scrollIntoView({duration:2000}).click()
        //cy.get('#comboBox').should('contain','Item 24')


    })


}) 