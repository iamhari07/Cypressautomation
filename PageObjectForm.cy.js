///  <reference types="Cypress"/>

import Login from './PageObjects/Login.js';


describe('Page Objects', function(){


    it('Login ', function(){

        const lp=new Login()
        lp.visit()
        lp.fillemail('autotest')
        lp.fillpassword('test123')
        lp.submit()
        cy.contains('Welcome').should('be.visible')

    })
})