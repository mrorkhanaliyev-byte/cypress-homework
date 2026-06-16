// =====================================================
// LESSON 3 — Yoxlamadakı 5 konsept, CANLI kodda
// Real sayt: abb-bank.az
// (Öyrənmə versiyası — hər konseptin izahı ilə)
// =====================================================

describe('ABB - Locator concepts live', () => {
    beforeEach(() => {
        cy.visit('https://abb-bank.az/', { failOnStatusCode: false });
    });

    // =====================================================
    // KONSEPT 1 — parent:: (YUXARI qalxmaq)
    // CSS yalnız aşağı gedə bilir. "Fərdi" mətnini tapıb onun
    // VALİDEYNİNƏ qalxmaq lazımdırsa — yalnız XPath bacarır.
    //   //*[text()="Fərdi"]  → mətni "Fərdi" olan istənilən element
    //   /parent::*           → onun valideyninə qalx (istənilən teq)
    // =====================================================
    it('1) parent axis - go UP', () => {
        cy.xpath('//*[text()="Fərdi"]/parent::*').should('exist');
    });

    // =====================================================
    // KONSEPT 2 — İndeks
    //   .eq(0)  → birinci (Cypress 0-dan sayır)
    //   .last() → sonuncu (rəqəm saymadan, ən təhlükəsiz yol)
    // ABB header-indəki linklər üzərində göstəririk.
    // =====================================================
    it('2) index eq() and last()', () => {
        cy.get('#header a').eq(0).should('exist');   // birinci link
        cy.get('#header a').last().should('exist');  // sonuncu link
    });

    // =====================================================
    // KONSEPT 3 — Atributun bir hissəsi
    //   [href^="/"]       → href-i "/" ilə BAŞLAYAN (daxili linklər)
    //   [href*="kredit"]  → href-də "kredit" sözü HƏR yerdə olan
    // (^ = başlanğıc, * = hər yer, $ = son)
    // =====================================================
    it('3) attribute starts-with and contains', () => {
        cy.get('[href^="/"]').should('have.length.greaterThan', 3);
        cy.get('[href*="kredit"]').should('exist');
    });

    // =====================================================
    // KONSEPT 4 — Sabit id seç, təsadüfi id-dən qaç
    // ABB "Radix UI" istifadə edir və bəzi id-lər təsadüfidir:
    //   id="radix-_R_4q5bsnlb9ivb_-trigger-1"  ← hər yüklənişdə DƏYİŞİR!
    // Bunları selektor kimi işlətmə (tap.az hash class-ları kimi).
    // Onun əvəzinə developerin verdiyi MƏNALI, sabit id-ni seç:
    //   id="header"  ← sabitdir, dəyişmir ✅
    // =====================================================
    it('4) stable id, not random radix id', () => {
        cy.get('#header').should('be.visible');
    });

    // =====================================================
    // KONSEPT 5 — Mötərizə fərqi (XPath-ın ən incə yeri)
    //   (//a)[1] → əvvəl bütün <a>-ları topla, sonra QLOBAL birincini
    //              götür → cəmi 1 element
    //   //a[1]   → HƏR valideynin içindəki birinci <a> → çox element
    // =====================================================
    it('5) bracket positional difference', () => {
        cy.xpath('(//a)[1]').should('have.length', 1);
        cy.xpath('//a[1]').should('have.length.greaterThan', 1);
    });
});
