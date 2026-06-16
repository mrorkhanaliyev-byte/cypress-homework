// LESSON 3 — Yoxlamadakı 5 konsept, canlı kodda — Real sayt: abb-bank.az
describe('ABB - Locator concepts live', () => {
    beforeEach(() => {
        cy.visit('https://abb-bank.az/', { failOnStatusCode: false });
    });

    // KONSEPT 1 — parent:: (CSS yuxarı qalxa bilmir, XPath bilir)
    it('1) parent axis - go UP', () => {
        cy.xpath('//*[text()="Fərdi"]/parent::*').should('exist');
    });

    // KONSEPT 2 — indeks: eq(0)=birinci, last()=sonuncu
    it('2) index eq() and last()', () => {
        cy.get('#header a').eq(0).should('exist');
        cy.get('#header a').last().should('exist');
    });

    // KONSEPT 3 — atribut hissəsi: ^ başlanğıc, * hər yer
    it('3) attribute starts-with and contains', () => {
        cy.get('[href^="/"]').should('have.length.greaterThan', 3);
        cy.get('[href*="kredit"]').should('exist');
    });

    // KONSEPT 4 — sabit id seç, təsadüfi (radix) id-dən qaç
    it('4) stable id, not random radix id', () => {
        cy.get('#header').should('be.visible');
        // QAÇ: #radix-_R_4q5bsnlb9ivb_-trigger-1 (hər yüklənişdə dəyişir)
    });

    // KONSEPT 5 — mötərizə fərqi: qlobal vs hər valideyndə
    it('5) bracket positional difference', () => {
        cy.xpath('(//a)[1]').should('have.length', 1);        // qlobal birinci
        cy.xpath('//a[1]').should('have.length.greaterThan', 1); // hər valideyndə
    });
});
