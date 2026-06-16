// Real saytlarda 3-cü tərəf skriptləri (reklam, analitika) bəzən
// JS xətası atır. Bu, bizim testimizlə bağlı olmasa da, Cypress testi
// dayandırır. Aşağıdakı sətir həmin xətaları "udur" ki, test davam etsin.
Cypress.on('uncaught:exception', () => false);

// Custom command-lar bura yazılır (sonrakı dərslərdə).
// Nümunə:
// Cypress.Commands.add('login', (username, password) => { ... })
