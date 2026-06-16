// =====================================================
// NÜMUNƏ 1 — Title & Header yoxlaması
// Sayt: demoblaze.com (saxta onlayn elektronika mağazası)
// (Öyrənmə versiyası — hər sətrin izahı ilə)
// =====================================================

describe('Demoblaze home page', () => {
    it('should check page title and brand', () => {

        // Sayta daxil ol
        cy.visit('https://www.demoblaze.com/');

        // Browser tab-ındakı başlıq. Bu saytda title sadəcə 'STORE'-dur.
        // Hər saytın title-ı fərqlidir — DevTools-da <title> teqinə baxıb
        // və ya cy.title() ilə yoxlayıb tapırıq.
        cy.title().should('eq', 'STORE');

        // '#nava' — saytın yuxarısındakı brend/loqo linki (id=nava).
        // # = id selektoru. Həm görünür, həm də içində "PRODUCT STORE"
        // mətni var. 'contain' istifadə etdik, çünki tam mətndə əlavə
        // boşluqlar ola bilər — 'have.text' sərt olardı.
        cy.get('#nava')
            .should('be.visible')
            .and('contain', 'PRODUCT STORE');
    });
});
