// =====================================================
// LESSON 3 — Advanced CSS Selectors (Qabaqcıl CSS selektorlar)
// Sayt: demoblaze.com (saxta elektronika mağazası)
// (Öyrənmə versiyası — hər sətrin izahı ilə)
// =====================================================

describe('Advanced CSS selectors', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });

    // ---------- 1) Atributun BİR HİSSƏSİNİ tapmaq ----------
    // [class*="card-img"] — class-ın İÇİNDƏ "card-img" olan elementlər.
    //   *=  → içində var (contains)
    //   ^=  → ilə başlayır (starts-with)
    //   $=  → ilə bitir (ends-with)
    // Bu, ən çox DİNAMİK id-lərdə işə yarayır, məsələn id="user-12345"
    // hər dəfə dəyişirsə, [id^="user-"] yazıb sabit hissəni tuturuq.
    it('attribute contains [class*=]', () => {
        cy.get('[class*="card-img"]').should('have.length.greaterThan', 0);
    });

    // ---------- 2) "ilə başlayan" atribut ----------
    // [id^="item"] — id-si "item" ilə başlayan bütün elementlər
    // (demoblaze-də kateqoriya linklərinin id-si "itemc"-dir).
    it('attribute starts-with [id^=]', () => {
        cy.get('[id^="item"]').should('have.length.greaterThan', 0);
    });

    // ---------- 3) Birbaşa övlad combinator-u ( > ) ----------
    // '.list-group > a' — YALNIZ .list-group-un BİRBAŞA içindəki <a>-lar.
    //   boşluq (' ')  → istənilən dərinlikdə (nəvə də olar)
    //   '>'           → yalnız birbaşa övlad (1 səviyyə aşağı)
    it('direct child combinator >', () => {
        cy.get('.list-group > a').should('have.length.greaterThan', 2);
    });

    // ---------- 4) İndekslə seçmək (.eq) + daraldılmış axtarış (.find) ----------
    // cy.get('#tbodyid .card') → bütün məhsul kartları (9 ədəd)
    // .eq(0)  → BİRİNCİ kart (DİQQƏT: .eq 0-dan başlayır!)
    // .find('.card-title a') → YALNIZ o kartın içində başlıq linkini axtar
    // .find() get-dən fərqlidir: bütün səhifədə yox, valideyn daxilində axtarır.
    it('index .eq() and scoped .find()', () => {
        cy.get('#tbodyid .card')
            .eq(0)
            .find('.card-title a')
            .should('be.visible');
    });

    // ---------- 5) Mətnə görə tapmaq (Cypress daxili, plugin lazım deyil) ----------
    // cy.contains('a', 'Laptops') — mətnində "Laptops" olan <a> elementi.
    // Birinci arqument teq (filtr), ikincisi mətndir. XPath-a alternativ
    // sadə yoldur — selektor bilmədən mətnə görə tapırsan.
    it('text-based cy.contains()', () => {
        cy.contains('a', 'Laptops').should('be.visible');
    });
});
