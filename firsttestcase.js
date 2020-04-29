describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://www.cypress.io/')
        // cy.get('nav>a').children(1).should('be.visible')
        // cy.contains("Features").should('be.visible')
        // cy.get('nav>a').contains("Features").should('be.visible').click();
        cy.get('nav>a').eq(1).scrollIntoView()
        cy.get('nav>a').eq(1).click({ force: true })
    })
})