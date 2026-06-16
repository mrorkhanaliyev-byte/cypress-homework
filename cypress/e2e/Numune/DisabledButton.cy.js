// NÜMUNƏ 3 — Disabled/Enabled — Sayt: demoqa.com
describe('DemoQA dynamic properties', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/dynamic-properties');
    });

    it('should have disabled button on page load', () => {
        cy.get('#enableAfter').should('be.disabled');
    });

    it('should enable the button after 5 seconds', () => {
        cy.get('#enableAfter').should('be.enabled');
    });
});
