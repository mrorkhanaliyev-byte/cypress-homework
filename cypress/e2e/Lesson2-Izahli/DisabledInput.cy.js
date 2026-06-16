// =====================================================
// TAPŞIRIQ 3 — .should('be.disabled') üçün REAL nümunə
// (Öyrənmə versiyası — hər sətrin izahı ilə)
//
// Sayt: the-internet.herokuapp.com/dynamic_controls
// Orada text input İLKİN olaraq disabled gəlir,
// "Enable" düyməsi basılanda aktivləşir.
// =====================================================

describe('Dynamic Controls disabled input', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_controls');
    });

    // ---------- TEST 1: Input ilkin vəziyyətdə disabled ----------
    it('should have disabled input on page load', () => {

        // '#input-example input' — KOMBİNƏ selektor:
        // "id-si input-example olan elementin İÇİNDƏKİ input".
        // Boşluq = "içində axtarmaq" (descendant selector).
        // Input-un öz id-si yoxdur, ona görə valideynindən gedirik.
        cy.get('#input-example input').should('be.disabled');
    });

    // ---------- TEST 2: Enable-dan sonra aktivləşir ----------
    it('should enable input after clicking Enable button', () => {

        // Düyməyə basırıq — sayt qısa "loading" göstərir
        cy.get('#input-example button').click();

        // ƏN VACİB MƏQAM: cy.wait() YAZMIRIQ!
        // .should('be.enabled') avtomatik RETRY edir — Cypress
        // 20 saniyəyə qədər (bizim defaultCommandTimeout) hər an
        // yenidən yoxlayır. Loading bitən kimi assertion keçir.
        // Sabit cy.wait(5000) həm testi yavaşladır, həm də
        // loading 6 saniyə çəksə test sınır. Retry isə etibarlıdır.
        cy.get('#input-example input')
            .should('be.enabled')
            .type('Cypress is awesome!')
            .should('have.value', 'Cypress is awesome!');
    });
});
