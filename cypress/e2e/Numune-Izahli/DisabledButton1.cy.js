// =====================================================
// NÜMUNƏ 3 — Disabled → Enabled düymə
// Sayt: demoqa.com/dynamic-properties
// Bu səhifədə bir düymə İLKİN olaraq disabled gəlir,
// 5 saniyə SONRA avtomatik aktivləşir.
// (Öyrənmə versiyası — hər sətrin izahı ilə)
// =====================================================

describe('DemoQA dynamic properties', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/dynamic-properties');
    });

    // ---------- Düymə ilkin vəziyyətdə disabled ----------
    it('should have disabled button on page load', () => {
        // '#enableAfter' — id=enableAfter olan düymə.
        // Səhifə açılan kimi bu düymə qeyri-aktivdir.
        cy.get('#enableAfter').should('be.disabled');
    });

    // ---------- 5 saniyə sonra aktivləşir ----------
    it('should enable the button after 5 seconds', () => {

        // ƏN VACİB DƏRS: cy.wait(5000) YAZMIRIQ!
        // should('be.enabled') avtomatik RETRY edir — Cypress
        // bizim defaultCommandTimeout (20 saniyə) müddətində hər an
        // yenidən yoxlayır. Düymə 5-ci saniyədə aktivləşən kimi
        // assertion keçir və test davam edir.
        //
        // Əgər cy.wait(5000) yazsaydıq: sayt 6 saniyə gecikdirsə test
        // sınardı; 1 saniyədə aktivləşsə 4 saniyə boş gözləyərdik.
        // Retry hər iki problemi həll edir — bu, Cypress-in gücüdür.
        cy.get('#enableAfter').should('be.enabled');
    });
});
