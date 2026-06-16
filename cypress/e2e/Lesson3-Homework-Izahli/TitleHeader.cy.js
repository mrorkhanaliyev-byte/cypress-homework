// =====================================================
// LESSON 3 EV TAPŞIRIĞI — Tapşırıq 1 & 2
// Real sayt: tap.az (Azərbaycan elanlar saytı)
// (Öyrənmə versiyası — hər sətrin izahı ilə)
// =====================================================

describe('Tap.az title and header', () => {

    // beforeEach: hər testdən əvvəl saytı açırıq.
    // { failOnStatusCode: false } — real saytlar bəzən 200-dən fərqli
    // status kodu qaytarır (məsələn 403/301). Bu parametr olmasa test
    // sınardı. Test saytlarında buna ehtiyac yox idi, real saytda var.
    beforeEach(() => {
        cy.visit('https://tap.az/', { failOnStatusCode: false });
    });

    // ---------- Tapşırıq 1: Title yoxlaması ----------
    // Real saytın title-ı uzundur — DevTools-da <title> teqinə baxıb
    // və ya cy.title() ilə tam mətni götürürük.
    it('should have correct page title', () => {
        cy.title().should('eq', 'Tap.Az – Pulsuz Elanlar Saytı — Bakı, Azərbaycan');
    });

    // ---------- Tapşırıq 2: Header və loqo ----------
    // DİQQƏT: tap.az "styled-components" istifadə edir — class adları
    // təsadüfi hash-dir (məs. "cViWJK"). Belə class-lar hər deploy-da
    // dəyişir → SELEKTOR KİMİ İSTİFADƏ ETMƏ!
    // Bunun əvəzinə sayt data-testid atributları qoyub — bunlar
    // qəsdən test üçündür və sabitdir. Locator prioritetimizlə tam uyğun.
    it('should display header and logo', () => {
        cy.get('[data-testid="header-box"]').should('be.visible');

        // Loqo həm görünür, həm də href="/" (ana səhifəyə qayıdır)
        cy.get('[data-testid="header-logo-link"]')
            .should('be.visible')
            .and('have.attr', 'href', '/');
    });
});
