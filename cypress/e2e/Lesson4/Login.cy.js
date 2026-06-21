// LESSON 4 — Tapşırıq 1, 2, 3: custom command + fixture
describe('Login - custom command and fixture', () => {

    it('should login with custom command', () => {
        cy.login('tomsmith', 'SuperSecretPassword!');
        cy.get('#flash').should('contain', 'You logged into a secure area!');
        cy.url().should('include', '/secure');
    });

    it('should login with valid user from fixture', () => {
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username, users.validUser.password);
            cy.get('#flash').should('contain', 'You logged into a secure area!');
        });
    });

    it('should show error with invalid user from fixture', () => {
        cy.fixture('users').then((users) => {
            cy.login(users.invalidUser.username, users.invalidUser.password);
            cy.get('#flash').should('contain', 'Your username is invalid!');
        });
    });
});
