// Real saytlarda 3-cü tərəf skriptləri (reklam, analitika) bəzən
// JS xətası atır. Bu, bizim testimizlə bağlı olmasa da, Cypress testi
// dayandırır. Aşağıdakı sətir həmin xətaları "udur" ki, test davam etsin.
Cypress.on('uncaught:exception', () => false);

// TAPŞIRIQ 1 — cy.login() custom command.
// Bir dəfə burada yazılır, BÜTÜN test fayllarında cy.login(...) kimi işləyir.
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
});
