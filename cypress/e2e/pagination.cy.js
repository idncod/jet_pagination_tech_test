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
    });

    it('should retrieve only 5 items from the API', () => {
        cy.get(':nth-child(3) > .paginate-buttons').click();
        cy.get('.col').should('have.length', 5);
    });
    
    it('should dynamically get items from API on count change', () => {
        cy.get('.count-input').clear().type('22').blur();

        cy.get('.col').should('have.length', 22);
    });

    it('should log default to the nearest acceptable value', () => {
        cy.get('.count-input').clear().type('3').blur();
        cy.get('.count-input').should('have.value', 3);
        cy.get('.col').should('have.length', 5);
    });

})