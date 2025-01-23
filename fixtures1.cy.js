describe('fixtures example 1', function() {
  
    let formdata;  

    before(function() {
        cy.fixture('registration').then((data) => {  
            formdata = data;
        });
    });

    it('fixtures', function() {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');

        cy.get('input[name="customer.firstName"]').type(formdata.firstName);
        cy.get('input[name="customer.lastName"]').type(formdata.lastName);
        cy.get('input[name="customer.address.street"]').type(formdata.address);
        cy.get('input[name="customer.address.city"]').type(formdata.city);
        cy.get('input[name="customer.address.state"]').type(formdata.state);
        cy.get('input[name="customer.address.zipCode"]').type(formdata.zipCode);
        cy.get('input[name="customer.phoneNumber"]').type(formdata.phoneNumber);
        cy.get('input[name="customer.ssn"]').type(formdata.ssn);
        cy.get('input[name="customer.username"]').type(formdata.username);
        cy.get('input[name="customer.password"]').type(formdata.password);
        cy.get('input[name="repeatedPassword"]').type(formdata.password);

        cy.get('input[value="Register"]').click();
        cy.contains('Welcome').should('be.visible');
    });
});
