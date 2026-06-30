class LoginPage {
    // ── Elementlər (selektorlar burada yaşayır) ──
    getUsernameField() { return cy.get('#username'); }
    getPasswordField() { return cy.get('#password'); }
    getLoginButton() { return cy.get('button[type="submit"]'); }
    getFlashMessage() { return cy.get('#flash'); }

    // ── Hərəkətlər (metodlar) ──
    visit() {
        cy.visit('https://the-internet.herokuapp.com/login');
    }

    login(username, password) {
        this.getUsernameField().type(username);
        this.getPasswordField().type(password);
        this.getLoginButton().click();
    }

    verifySuccessMessage() {
        this.getFlashMessage().should('contain', 'You logged into a secure area!');
    }

    verifyErrorMessage() {
        this.getFlashMessage().should('contain', 'Your username is invalid!');
    }
}

export default new LoginPage();
