describe('Handle Tables', () => {

    beforeEach('Loginpage', () => {
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login", { failOnStatusCode: false });
        cy.get("#input-username").clear();
        cy.get("#input-username").type("demo");
        cy.get("#input-password").clear();
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();

        //cy.get(".btn-close").click(); 
        //cy.wait(4000); 

        
        cy.get("#menu-customer>a").click(); 
        cy.get("#menu-customer>ul>li:first-child").click(); 
    });

    it('Check Number of Rows & Columns', () => {
        
        cy.get('.table-responsive tbody tr').should('have.length.greaterThan', 0);

        
        cy.get('.table-responsive thead tr th').should('have.length', 0); 
    });

    it('Check cell data from specific row & column', () => {
        
        cy.get('.table-responsive tbody tr')
            .eq(0) 
            .find('td')
            .eq(1) 
            .should('not.be.empty'); 

        
        cy.get('.table-responsive tbody tr')
            .eq(0)
            .find('td')
            .eq(2) 
            .should('not.be.empty'); 
    });

});
