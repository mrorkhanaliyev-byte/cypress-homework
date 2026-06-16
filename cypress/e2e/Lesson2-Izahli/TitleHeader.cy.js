// =====================================================
// TAPŞIRIQ 1 — Sayta daxil ol, title və header-i yoxla
// (Öyrənmə versiyası — hər sətrin izahı ilə)
// =====================================================

// describe() — testləri QRUPLAŞDIRIR. Birinci arqument addır
// (Cypress pəncərəsində bu ad görünür), ikincisi funksiyadır.
describe('SauceDemo home page', () => {

    // it() — BİR test ssenarisidir. Adı həmişə "should ..." ilə
    // başlamaq yaxşı vərdişdir: "nə etməlidir?"
    it('should check page title and header', () => {

        // cy.visit() — brauzerdə həmin URL-i açır.
        // Test həmişə səhifə tam yüklənənə qədər gözləyir.
        cy.visit('https://www.saucedemo.com/');

        // cy.title() — browser TAB-ında görünən başlığı götürür
        // (HTML-dəki <title> teqi). Elementə aid deyil!
        // 'eq' = tam bərabərlik. 'include' yazsaq "tərkibində var"
        // demək olardı — yəni should('include', 'Swag') da keçərdi.
        cy.title().should('eq', 'Swag Labs');

        // cy.get('.login_logo') — CSS selektor: nöqtə = class.
        // Yəni class="login_logo" olan elementi tapır.
        // .should() — birinci yoxlama: element GÖRÜNÜR
        // .and()    — EYNİ elementdə ikinci yoxlama: mətn düzgündür.
        // .and() əslində should()-un sinonimidir, oxunaqlıq üçündür.
        cy.get('.login_logo')
            .should('be.visible')
            .and('have.text', 'Swag Labs');
    });
});
