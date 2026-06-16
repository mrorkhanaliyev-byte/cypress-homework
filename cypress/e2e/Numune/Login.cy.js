// NÜMUNƏ 2 — Login — Sayt: automationexercise.com
describe('Automation Exercise login', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/login');
    });

    it('should show error with invalid credentials', () => {
        cy.get('[data-qa="login-email"]').type('nouser@test.com');
        cy.get('[data-qa="login-password"]').type('wrongpass');
        cy.get('[data-qa="login-button"]').click();
        cy.get('.login-form p')
            .should('be.visible')
            .and('have.text', 'Your email or password is incorrect!');
    });

    it('should show email field on page load', () => {
        cy.get('[data-qa="login-email"]').should('be.visible');
    });
});
