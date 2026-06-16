// =====================================================
// LESSON 3 EV TAPŞIRIĞI — XPath ilə element tapmaq
// Real sayt: tap.az
// Tələb: cypress-xpath plugin quraşdırılıb (artıq etmişik):
//   npm install cypress-xpath --save-dev
//   e2e.js → require('cypress-xpath')
// (Öyrənmə versiyası — hər sətrin izahı ilə)
// =====================================================

describe('Tap.az XPath locators', () => {
    beforeEach(() => {
        cy.visit('https://tap.az/', { failOnStatusCode: false });
    });

    // ---------- 1) Atributa görə (ən etibarlı) ----------
    // //a[@data-testid="header-logo-link"]
    //   //a            → istənilən yerdə <a>
    //   [@data-testid=...] → bu data-testid atributu olan
    it('find logo by data-testid attribute', () => {
        cy.xpath('//a[@data-testid="header-logo-link"]').should('be.visible');
    });

    // ---------- 2) id-yə görə ----------
    // //input[@id="q_keywords"] — axtarış sahəsi.
    // XPath-da id belə yazılır; CSS-də isə #q_keywords olardı.
    it('find search input by id', () => {
        cy.xpath('//input[@id="q_keywords"]').should('be.visible');
    });

    // ---------- 3) Bütün uyğun elementlər ----------
    // //*[@data-testid="ad-card"]
    //   *  → istənilən teq (a, div, hər nə olursa)
    // Səhifədə çoxlu elan kartı var → 5-dən çox olmalıdır.
    it('find all ad cards', () => {
        cy.xpath('//*[@data-testid="ad-card"]').should('have.length.greaterThan', 5);
    });

    // ---------- 4) Dəqiq mətnə görə ----------
    // //a[text()="Son elanlar"] — mətni tam "Son elanlar" olan link.
    // CSS bunu bacarmır — mətnə görə tapmaq XPath-ın üstünlüyüdür.
    it('find link by exact text', () => {
        cy.xpath('//a[text()="Son elanlar"]').should('exist');
    });

    // ---------- 5) Atributun bir hissəsinə görə ----------
    // contains(@href,"/elanlar") — href-i içində "/elanlar" olan link.
    // Tam URL bilməsək belə, hissəni tutub tapırıq.
    it('find link by partial href contains()', () => {
        cy.xpath('//a[contains(@href,"/elanlar")]').should('exist');
    });

    // ---------- 6) Mövqeyə görə (positional) ----------
    // (//*[@data-testid="ad-card-title"])[1] → BİRİNCİ elan başlığı.
    // Mötərizə vacibdir: qlobal birinci. XPath indeksi 1-dən başlayır!
    it('find first ad title by positional index', () => {
        cy.xpath('(//*[@data-testid="ad-card-title"])[1]').should('be.visible');
    });
});
