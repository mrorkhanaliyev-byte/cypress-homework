// LESSON 3 EV TAPŞIRIĞI — XPath ilə element tapmaq — Real sayt: tap.az
describe('Tap.az XPath locators', () => {
    beforeEach(() => {
        cy.visit('https://tap.az/', { failOnStatusCode: false });
    });

    it('find logo by data-testid attribute', () => {
        cy.xpath('//a[@data-testid="header-logo-link"]').should('be.visible');
    });

    it('find search input by id', () => {
        cy.xpath('//input[@id="q_keywords"]').should('be.visible');
    });

    it('find all ad cards', () => {
        cy.xpath('//*[@data-testid="ad-card"]').should('have.length.greaterThan', 5);
    });

    it('find link by exact text', () => {
        cy.xpath('//a[text()="Son elanlar"]').should('exist');
    });

    it('find link by partial href contains()', () => {
        cy.xpath('//a[contains(@href,"/elanlar")]').should('exist');
    });

    it('find first ad title by positional index', () => {
        cy.xpath('(//*[@data-testid="ad-card-title"])[1]').should('be.visible');
    });
});
