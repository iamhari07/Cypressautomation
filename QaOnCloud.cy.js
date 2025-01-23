describe('qaoncloud', () =>{

    before( () => {

        cy.visit('https://www.qaoncloud.com/')
    })

    it('QOC title', () =>{
        cy.title().should('include','QAonCloud')
    })

    it('QOC Logo', () =>{
        cy.visit('https://www.qaoncloud.com/')
        cy.get('img[src="https://www.qaoncloud.com/public/assets/wp/wp-content/uploads/elementor/thumbs/QAonCloud.svg"]',{ timeout: 4000 }).should('be.visible')

    })

    it('Contact Us', () =>{

        cy.visit('https://www.qaoncloud.com/')
        cy.get('.elementor-button-text').should('contain.text', 'Contact Us')
    })

    it('Banner', () => {
        // Check if the navigation bar exists and is visible
        cy.visit('https://www.qaoncloud.com/')
        cy.get('div[id="homeMainNav"]').should('be.visible')
        .and('contains.text','Services')
      })
    
    it('Talk to an Expert', () => {
    
        cy.visit('https://www.qaoncloud.com/')
        cy.get('a[href="/contact-us"]').should('be.visible')
        .first().click();
        cy.url().should('include','/contact-us')
    })

    it('Footer', () =>{

        cy.visit('https://www.qaoncloud.com/')
        cy.get('section[data-id="b046965"]').should('be.visible')
        .and('contains.text','Company')
    })

    it('Blogs', () =>{

        cy.visit('https://www.qaoncloud.com/')
        cy.contains('a', 'Insights')
        .should('be.visible', { timeout: 5000 }) 
        .click();
        cy.get('a.dropdown-item[href="https://www.qaoncloud.com/blog-trending-posts"]').click()

    })


})