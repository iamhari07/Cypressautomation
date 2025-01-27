describe('CSS Locators', () =>{

    it('csslocators', () => {

    cy.visit('http://www.automationpractice.pl/index.php')

    //cy.get('#search_query_top').type('T-Shirts') //id 

    cy.get("input[name='search_query']").type('T-Shirts')   //input attribute
    

    cy.get("[name='submit_search']").click()  // attribute
    
    

    cy.get(".lighter").contains('T-Shirts')   //assesrtion


    }

)

it("demo test", () =>{

cy.visit("https://demo.testfire.net/")
cy.get("[name='query']").type('hello')
cy.get("[type='submit']").click()
cy.get('p').contains('hello')    //assertion



}

)
}
)