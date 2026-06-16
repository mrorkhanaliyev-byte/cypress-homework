describe('SauceDemo home page', () => {
    it('should check page title and header', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq', 'Swag Labs');
        cy.get('.login_logo')
            .should('be.visible')
            .and('have.text', 'Swag Labs');
    });
});
