describe('Product card text styling requirements', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    
    it('should be justified', () => {
        cy.get('.description-container')
        .should('have.css', 'text-align', 'justify')
        .should('have.css', 'height', '135px')
    });

    it('should have price on the bottom right', () => {
        cy.get('.price-container')
        .should('have.css', 'text-align', 'right')
        .should('have.css', 'margin-top', '20px')
        .should('have.css', 'font-size', '18px')
    });
});