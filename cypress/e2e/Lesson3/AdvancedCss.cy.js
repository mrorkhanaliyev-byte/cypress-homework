// LESSON 3 — Advanced CSS Selectors — Sayt: demoblaze.com
describe('Advanced CSS selectors', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });

    it('attribute contains [class*=]', () => {
        cy.get('[class*="card-img"]').should('have.length.greaterThan', 0);
    });

    it('attribute starts-with [id^=]', () => {
        cy.get('[id^="item"]').should('have.length.greaterThan', 0);
    });

    it('direct child combinator >', () => {
        cy.get('.list-group > a').should('have.length.greaterThan', 2);
    });

    it('index .eq() and scoped .find()', () => {
        cy.get('#tbodyid .card')
            .eq(0)
            .find('.card-title a')
            .should('be.visible');
    });

    it('text-based cy.contains()', () => {
        cy.contains('a', 'Laptops').should('be.visible');
    });
});
