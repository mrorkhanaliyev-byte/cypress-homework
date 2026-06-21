// cy.login() custom command ilə login testi
// Sayt: the-internet.herokuapp.com (tomsmith demo hesabı)
describe('Login with custom command', () => {

    it('should login successfully', () => {
        cy.login('tomsmith', 'SuperSecretPassword!');
        cy.get('#flash').should('contain', 'You logged into a secure area!');
        cy.url().should('include', '/secure');
    });
});
