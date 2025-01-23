describe('fixtures example', () => {

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data; 
        });
    });

    it('fixtures', function() { 
        cy.visit('https://admin-demo.nopcommerce.com/login');
        cy.get('input[type="email"]').type(this.data.email); 
        cy.get('input[name="Password"]').type(this.data.password);
        cy.get('button[type="submit"]').click();
    });

});
