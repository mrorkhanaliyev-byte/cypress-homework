// =====================================================
// TAPŞIRIQ 2 — Dərs 2-nin tam ev tapşırığı
// (Öyrənmə versiyası — hər sətrin izahı ilə)
// =====================================================

describe('Login Page Tests', () => {

    // beforeEach() — HƏR it()-dən ƏVVƏL avtomatik işləyir.
    // Bu faylda 4 it() var → beforeEach 4 DƏFƏ işləyəcək.
    // Faydası: cy.visit()-i 4 dəfə təkrar yazmırıq (DRY prinsipi:
    // "Don't Repeat Yourself" — özünü təkrar etmə).
    // Hər test TƏMİZ səhifə ilə başlayır — testlər bir-birindən
    // asılı olmur. Buna "test isolation" deyilir.
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    // ---------- TEST 1: Uğurlu login ----------
    it('should login with valid credentials', () => {

        // '#username' — CSS selektor: # işarəsi = id.
        // Yəni id="username" olan elementi tapır.
        // .type() — sahəyə mətn yazır.
        // .should('have.value', ...) — yazdığımızın həqiqətən
        // sahəyə düşdüyünü yoxlayır. Action + assertion zənciri —
        // müəllimin də istifadə etdiyi üslubdur.
        cy.get('#username')
            .type('tomsmith')
            .should('have.value', 'tomsmith');

        cy.get('#password')
            .type('SuperSecretPassword!');

        // 'button[type="submit"]' — atribut selektoru:
        // <button type="submit"> elementini tapır.
        // Bu düymənin id-si yoxdur, ona görə atributla tapırıq.
        cy.get('button[type="submit"]').click();

        // '#flash' — nəticə mesajının göründüyü div.
        // 'contain' = mətnin BİR HİSSƏSİ uyğun gəlsin (kifayətdir).
        // 'have.text' yazsaydıq TAM mətn üst-üstə düşməli idi —
        // mesajda əlavə simvollar (×, boşluq) olduğu üçün keçməzdi.
        cy.get('#flash')
            .should('be.visible')
            .and('contain', 'You logged into a secure area!');
    });

    // ---------- TEST 2: Uğursuz login ----------
    // Negativ test: sistem SƏHV məlumatda düzgün xəta verirmi?
    // QA-da negativ testlər pozitivlər qədər vacibdir!
    it('should show error with invalid credentials', () => {
        cy.get('#username').type('wronguser');
        cy.get('#password').type('wrongpassword');
        cy.get('button[type="submit"]').click();

        cy.get('#flash')
            .should('be.visible')
            .and('contain', 'Your username is invalid!');
    });

    // ---------- TEST 3: Username sahəsi görünür ----------
    // Homework bənd 2. Qısa testdir, amma dəyərlidir:
    // səhifə ümumiyyətlə düzgün yüklənibmi?
    it('should show username field on page load', () => {
        cy.get('#username').should('be.visible');
    });

    // ---------- TEST 4: 'Forgot password?' linki ----------
    // Homework bənd 5 — müəllimin tələsi! Bu səhifədə belə link
    // YOXDUR, ona görə sualda "(if it exists)" yazılıb.
    // cy.contains() — mətnə görə element axtarır.
    // .should('not.exist') — elementin OLMADIĞINI təsdiqləyir.
    // Diqqət: 'not.be.visible' yox, 'not.exist' — çünki element
    // ümumiyyətlə DOM-da yoxdur (gizli deyil, mövcud deyil).
    it('should not have Forgot password link', () => {
        cy.contains('Forgot password').should('not.exist');
    });
});
