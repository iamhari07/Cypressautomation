describe('OrangeHRM Demo Test', () => {
    it('Logs into the Orange HRM App', () => {
       
        cy.visit('https://opensource-demo.orangehrmlive.com/');

        cy.get('input[name="username"]').type('Admin');

        cy.get('input[name="password"]').type('admin123');

        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/dashboard');
        
    });
});
