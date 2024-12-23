describe('Navigations',()=>{

    it('Browser Naigation', () =>{

    cy.visit('https://demo.testfire.net/index.jsp')

    cy.title().should('eq',"Altoro Mutual")   //home page

    cy.get('#MenuHyperLink4').click()

    cy.get("div[class='fl'] h1").should('have.text',"Cards")  //Card page

    cy.go('back')  //go back to home page

    cy.title().should('eq',"Altoro Mutual") 

    cy.go('forward')  //Cards page

    cy.get("div[class='fl'] h1").should('have.text',"Cards")

    cy.go(-1)  //Home page

    cy.title().should('eq',"Altoro Mutual")   //home page

    cy.go(1)

    cy.get("div[class='fl'] h1").should('have.text',"Cards")  //Card page

    cy.reload()  //reloads your page


    })


})