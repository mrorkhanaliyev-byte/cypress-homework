// LESSON 4 — Page Object Model (final layihə)
import loginPage from '../../pages/LoginPage';

describe('Login Page - POM', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('should login with valid credentials', () => {
        loginPage.login('tomsmith', 'SuperSecretPassword!');
        loginPage.verifySuccessMessage();
        cy.screenshot('login-success');
    });

    it('should show error with invalid credentials', () => {
        loginPage.login('wronguser', 'wrongpass');
        loginPage.verifyErrorMessage();
    });
});
