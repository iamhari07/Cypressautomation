describe('handling frames', () => {

    it('IFrames', ()=> {

        cy.visit('https://demo.automationtesting.in/Frames.html')

        const iframe=cy.get('#singleframe')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.find('input[type="text"]').type('Hello World')


    })

    it('using custom command', ()=> {

        cy.visit('https://demo.automationtesting.in/Frames.html')

        cy.getIframe('#singleframe').find('input[type="text"]').type('Hello World')


    })

    it('using Plugin', ()=> {

        cy.visit('https://demo.automationtesting.in/Frames.html')

        cy.frameLoaded('#singleframe');
        cy.iframe('#singleframe').find('input[type="text"]').type('Hello World')


    })








})