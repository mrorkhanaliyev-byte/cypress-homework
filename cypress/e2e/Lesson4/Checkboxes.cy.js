// LESSON 4 — Tapşırıq 5: checkbox səhifəsi
describe('Checkboxes page', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
    });

    it('should check and uncheck the first checkbox', () => {
        cy.get('input[type="checkbox"]').first().check().should('be.checked');
        cy.get('input[type="checkbox"]').first().uncheck().should('not.be.checked');
    });

    it('should have the second checkbox checked by default', () => {
        cy.get('input[type="checkbox"]').eq(1).should('be.checked');
    });

    it('should check all checkboxes', () => {
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="checkbox"]:checked').should('have.length', 2);
    });
});
