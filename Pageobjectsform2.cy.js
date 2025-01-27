///  <reference types="Cypress"/>

import Registration from './PageObjects/registration.js';


describe('Page Objects', function(){


    it('registration ', function(){

        const rp=new Registration()
        rp.fillfname('test')
        rp.filllname('user')
        rp.fillGender('Male')
        rp.fillhobbies('Reading')
        rp.filloffice('MCR')
        rp.filluname('testuser12')
        rp.fillpwd('password123')
        rp.fillConfirmpwd('password123')
        rp.fillemail('user1@gmail.com')
        rp.fillContactNo('9876543210')
        rp.fillMessage('hello all')
        rp.submit()

    })
})