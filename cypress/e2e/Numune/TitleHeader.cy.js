// NÜMUNƏ 1 — Title & Header — Sayt: demoblaze.com
describe('Demoblaze home page', () => {
    it('should check page title and brand', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.title().should('eq', 'STORE');
        cy.get('#nava')
            .should('be.visible')
            .and('contain', 'PRODUCT STORE');
    });
});
