// =====================================================
// NÜMUNƏ 2 — Login (uğursuz) yoxlaması
// Sayt: automationexercise.com (real e-commerce təlim saytı)
// (Öyrənmə versiyası — hər sətrin izahı ilə)
// =====================================================

describe('Automation Exercise login', () => {

    // beforeEach: hər testdən əvvəl login səhifəsini açırıq.
    // 2 it() var → 2 dəfə işləyəcək.
    beforeEach(() => {
        cy.visit('https://automationexercise.com/login');
    });

    // ---------- Uğursuz login (negativ test) ----------
    it('should show error with invalid credentials', () => {

        // YENİ SELEKTOR NÖVÜ: [data-qa="..."]
        // Bu sayt qəsdən test üçün xüsusi "data-qa" atributları qoyub.
        // data-* atributları YALNIZ test üçündür — dizayn dəyişsə belə
        // qalır, ona görə ƏN ETİBARLI selektordur. Real layihələrdə
        // komandalar məhz belə atributlar əlavə edir.
        cy.get('[data-qa="login-email"]').type('nouser@test.com');
        cy.get('[data-qa="login-password"]').type('wrongpass');
        cy.get('[data-qa="login-button"]').click();

        // Səhv məlumatda saytın verdiyi xəta mesajı.
        // '.login-form p' — class=login-form olan blokun içindəki <p> teqi.
        // Boşluq = "içində axtar". Mesaj sabit olduğu üçün burada
        // 'have.text' (tam uyğunluq) istifadə etmək olar.
        cy.get('.login-form p')
            .should('be.visible')
            .and('have.text', 'Your email or password is incorrect!');
    });

    // ---------- Email sahəsi səhifə açılanda görünür ----------
    it('should show email field on page load', () => {
        cy.get('[data-qa="login-email"]').should('be.visible');
    });
});
