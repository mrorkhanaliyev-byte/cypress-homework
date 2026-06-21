// LESSON 4 — Tapşırıq 4: dropdown səhifəsi
describe('Dropdown page', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
    });

    it('should select option by visible text', () => {
        cy.get('#dropdown').select('Option 1').should('have.value', '1');
    });

    it('should select option by value', () => {
        cy.get('#dropdown').select('2').should('have.value', '2');
    });

    it('should contain expected options in the list', () => {
        cy.get('#dropdown option').then(($opts) => {
            const texts = $opts.map((i, el) => el.text).get();
            expect(texts).to.include('Option 1');
            expect(texts).to.include('Option 2');
        });
    });
});
