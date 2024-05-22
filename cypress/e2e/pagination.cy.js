/// <reference types="cypress" />

describe('Validate Pagination Requirements', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should highlight currently selected page', () => {
        cy.get(':nth-child(3) > .paginate-buttons').click();
        
        cy.get(':nth-child(3) > .paginate-buttons')
            .should('have.css', 'background-color', 'rgb(170, 170, 170)');
        cy.get(':nth-child(2) > .paginate-buttons')
            .should('have.css', 'background-color', 'rgb(242, 242, 242)');
    })
})