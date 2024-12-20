describe('radio,dropdown,checkboxes', () =>{

 it('testboxes', () => {

 cy.visit("https://www.qa-practice.com/elements/input/simple")
 cy.get("[name='text_string']").type('hello{enter}')
 cy.get("[name='result']").contains('hello')
 }

)

it('buttons', () => {

    cy.visit("https://www.qa-practice.com/elements/button/simple")
    cy.get("#submit-id-submit").click()
    cy.get('p').contains('Submitted')
    
    cy.get("a[href='/elements/button/like_a_button']").click()
    //cy.wait(4000)
    cy.get("[href='#']").click()
    cy.get('p').contains('Submitted')


    cy.get('a[href="/elements/button/disabled"]').click()
    cy.get('#id_select_state').select('enabled')
    cy.get('[name="submit"]').click()
    cy.get('.result-text').contains('Submitted')

    }
   
   )

   it('Checkboxes', () => {

    cy.visit("https://www.qa-practice.com/elements/checkbox/single_checkbox")
    cy.get("[type='checkbox']").check()
    cy.get("[type='submit']").click()
    cy.get('.result-text').contains('select me or not')

    cy.get('a[href="/elements/checkbox/mult_checkbox"]').click()
    cy.get('input[value="one"]').check()
    cy.get('input[value="two"]').check()
    cy.get('input[value="three"]').check()
    cy.get("[type='submit']").click()
    cy.get('.result-text').contains('one, two, three')
    }
   
   )






})