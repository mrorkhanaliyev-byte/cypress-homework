// =====================================================
// LESSON 3 — XPath locators
// Sayt: demoblaze.com
// Qeyd: XPath Cypress-də HAZIR DEYİL — cypress-xpath plugin lazımdır.
//   1) npm install cypress-xpath --save-dev
//   2) cypress/support/e2e.js → require('cypress-xpath')
// (Öyrənmə versiyası — hər sətrin izahı ilə)
// =====================================================

describe('XPath locators', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });

    // ---------- 1) Dəqiq mətnə görə ----------
    // //a[text()="Phones"] — mətni TAM "Phones" olan <a>.
    //   //   → DOM-da istənilən yerdə axtar
    //   //a  → istənilən <a> teqi
    //   [text()="Phones"] → şərt: mətni "Phones" olsun
    it('exact text', () => {
        cy.xpath('//a[text()="Phones"]').should('be.visible');
    });

    // ---------- 2) Mətnin BİR HİSSƏSİNƏ görə ----------
    // contains(text(),"Lap") → mətnində "Lap" keçən element ("Laptops").
    // CSS bunu bacarmır — mətnə görə axtarış XPath-ın gücüdür.
    it('partial text contains()', () => {
        cy.xpath('//a[contains(text(),"Lap")]').should('have.text', 'Laptops');
    });

    // ---------- 3) following-sibling — yan qardaş ----------
    // "CATEGORIES" linkindən SONRA gələn ilk <a> qardaşı = "Phones".
    // [1] → ilk qardaş (XPath-da indeks 1-dən başlayır, 0-dan yox!).
    it('following-sibling axis', () => {
        cy.xpath('//a[text()="CATEGORIES"]/following-sibling::a[1]')
            .should('have.text', 'Phones');
    });

    // ---------- 4) parent — YUXARI qalxmaq ----------
    // //a[text()="Phones"]/parent::div → Phones linkinin valideyn div-i.
    // ⭐ ƏN VACİB FƏRQ: CSS YUXARI qalxa bilmir, yalnız aşağı gedə bilir.
    // XPath isə valideynə, ata-babaya (ancestor) qalxa bilir — bu, çətin
    // DOM-larda XPath-ı əvəzsiz edir.
    it('parent axis (go UP — CSS cannot)', () => {
        cy.xpath('//a[text()="Phones"]/parent::div')
            .should('have.class', 'list-group');
    });

    // ---------- 5) Mövqeyə görə (positional) ----------
    // (//div[@class="card h-100"])[1] → səhifədəki BİRİNCİ kart.
    // DİQQƏT: mötərizə vacibdir!
    //   (//div)[1] → bütün səhifədə qlobal birinci
    //   //div[1]   → HƏR valideynin içindəki birinci (fərqli məna!)
    it('positional (1-based, global)', () => {
        cy.xpath('(//div[@class="card h-100"])[1]').should('exist');
    });
});
