describe('Checking demo.testfire.net on different screens', () => {
    const url = 'https://demo.testfire.net';
    
    it('Check on iPhone 15', () => {
      cy.viewport('iphone-x');
      cy.visit(url);
      cy.contains('Sign In').click();
    });
    
    it('Check on Samsung S20', () => {
      cy.viewport(1440, 3200);
      cy.visit(url);
      cy.contains('Sign In').click();
    });
  });
  