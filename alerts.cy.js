describe('alerts',() =>{

it('JsAlerts', () =>{

cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

cy.get("button[onclick='jsAlert()']").click()

cy.on('window:alert',(t) =>{

        expect(t).to.contains('I am a JS Alert');
})

cy.get('#result').should('have.text','You successfully clicked an alert')
//cy.get('#result').contains('You successfully clicked an alert')


})


it('confirmation alert- ok',() =>{

cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
cy.get('[onclick="jsConfirm()"]').click()

cy.on('window:confirm',(t) =>{

    expect(t).to.contains('I am a JS Confirm')

})

//cy.get('#result').contains('You clicked: Ok')
cy.get('#result').should('have.text','You clicked: Ok')

})

it('confirmation alert- Cancel',() =>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get('[onclick="jsConfirm()"]').click()
    
    cy.on('window:confirm',(t) =>{
    
        expect(t).to.contains('I am a JS Confirm')
    
    })
    
    cy.on('window:confirm',()=> false)    // closing window using cacel button
    cy.get('#result').should('have.text','You clicked: Cancel')


})

it('Prompt alert', ()=>{

cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

cy.window().then((box) =>{

    cy.stub(box,'prompt').returns('welcome to cypress')
})

cy.get('[onclick="jsPrompt()"]').click()

cy.get('#result').should('have.text','You entered: welcome to cypress')

//cy.on('window:confirm',()=> false)    // closing window using cacel button
    //cy.get('#result').should('have.text','You entered: null')


})

it('Authentication',() =>{

cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth: {username:"admin", password:"admin"}})

cy.get("div[class='example'] p").should('have.contain',"Congratulations!")


})

})