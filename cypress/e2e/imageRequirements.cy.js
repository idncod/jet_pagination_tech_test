/// <reference types="cypress" />

// describe('', () => {...});

describe('Validate Image Requirements', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('should stretch horizontally to fill its container', () => {
        cy.get('.image-container')
            .should('be.visible')
            .and(($img) => {
                const containerWidth = $img.parent().width();
                const imgWidth = $img.width();
                expect(imgWidth).to.be.closeTo(containerWidth, 1);
            });
    });

    it('should have a height of 200px', () => {
        cy.get('.image-container')
            .should('be.visible')
            .and(($img) => {
                expect($img).to.have.css('height', '200px');
        });

    });

    it('should display 5 images on initial page visit', () => {
        cy.get('.image-container')
            .should('have.length', 5);

        for (let i = 1; i <= 5; i++) {
            cy.get(`:nth-child(${i}) > .product-card-container > .image-container`)
            .should('be.visible');
        }
    });
});