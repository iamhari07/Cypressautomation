describe('Assertions', () => {

  it('Implicit Assertions', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    
    cy.url()
      .should('include', 'orangehrmlive.com')
      .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('contain', 'orangehrmlive');
  });

  it('Login page assertions', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   
    cy.url().should('include', '/auth/login');

   
    cy.title().should('eq', 'OrangeHRM');

   
    cy.get('form').should('be.visible');

    cy.get('input[name="username"]')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Username');

    cy.get('input[name="password"]')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Password');

    
    cy.get('button[type="submit"]')
      .should('be.visible')
      .and('contain', 'Login');

    
    cy.contains('Forgot your password?').should('be.visible');
  });

  it('Invalid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    
    cy.get('input[name="username"]').type('invalidUser');
    cy.get('input[name="password"]').type('invalidPass');

    cy.get('button[type="submit"]').click();

    
    cy.get('.oxd-alert-content')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });

  it('Valid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');

    cy.get('button[type="submit"]').click();

   
    cy.url().should('not.include', '/auth/login');
    cy.url().should('include', '/dashboard');

    cy.contains('Dashboard').should('be.visible');
  });

});
