// LESSON 3 — XPath (cypress-xpath plugin) — Sayt: demoblaze.com
describe('XPath locators', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });

    it('exact text', () => {
        cy.xpath('//a[text()="Phones"]').should('be.visible');
    });

    it('partial text contains()', () => {
        cy.xpath('//a[contains(text(),"Lap")]').should('have.text', 'Laptops');
    });

    it('following-sibling axis', () => {
        cy.xpath('//a[text()="CATEGORIES"]/following-sibling::a[1]')
            .should('have.text', 'Phones');
    });

    it('parent axis (go UP — CSS cannot)', () => {
        cy.xpath('//a[text()="Phones"]/parent::div')
            .should('have.class', 'list-group');
    });

    it('positional (1-based, global)', () => {
        cy.xpath('(//div[@class="card h-100"])[1]').should('exist');
    });
});
