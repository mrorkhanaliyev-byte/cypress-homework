describe('Login Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('should login with valid credentials', () => {
        cy.get('#username')
            .type('tomsmith')
            .should('have.value', 'tomsmith');
        cy.get('#password')
            .type('SuperSecretPassword!');
        cy.get('button[type="submit"]').click();
        cy.get('#flash')
            .should('be.visible')
            .and('contain', 'You logged into a secure area!');
    });

    it('should show error with invalid credentials', () => {
        cy.get('#username').type('wronguser');
        cy.get('#password').type('wrongpassword');
        cy.get('button[type="submit"]').click();
        cy.get('#flash')
            .should('be.visible')
            .and('contain', 'Your username is invalid!');
    });

    it('should show username field on page load', () => {
        cy.get('#username').should('be.visible');
    });

    it('should not have Forgot password link', () => {
        // the-internet login page has no such link
        cy.contains('Forgot password').should('not.exist');
    });
});
