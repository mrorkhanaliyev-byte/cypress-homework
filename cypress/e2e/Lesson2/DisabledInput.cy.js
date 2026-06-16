describe('Dynamic Controls disabled input', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_controls');
    });

    it('should have disabled input on page load', () => {
        cy.get('#input-example input').should('be.disabled');
    });

    it('should enable input after clicking Enable button', () => {
        cy.get('#input-example button').click();
        cy.get('#input-example input')
            .should('be.enabled')
            .type('Cypress is awesome!')
            .should('have.value', 'Cypress is awesome!');
    });
});
