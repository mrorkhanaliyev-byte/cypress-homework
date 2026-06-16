// LESSON 3 EV TAPŞIRIĞI — Tapşırıq 1 & 2 — Real sayt: tap.az
describe('Tap.az title and header', () => {
    beforeEach(() => {
        cy.visit('https://tap.az/', { failOnStatusCode: false });
    });

    it('should have correct page title', () => {
        cy.title().should('eq', 'Tap.Az – Pulsuz Elanlar Saytı — Bakı, Azərbaycan');
    });

    it('should display header and logo', () => {
        cy.get('[data-testid="header-box"]').should('be.visible');
        cy.get('[data-testid="header-logo-link"]')
            .should('be.visible')
            .and('have.attr', 'href', '/');
    });
});
