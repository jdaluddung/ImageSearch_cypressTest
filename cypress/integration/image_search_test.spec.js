/// <reference types="Cypress" />

describe ('Verify Image Search app', () => {

    beforeEach(() => {
    cy.visit('Https://o2400.csb.app?standalone'), 
    cy.get('[id="root"]', { timeout: 60000 }).should('be.visible');
    cy.get('h1').as('header')
    cy.get('[id="bb-id-5"]').as('inputText')
    cy.get('[type="button"]').as('submitBtn')
    });
  
    it('Verify page contains correct fields', () => {
        //Header is correct
          cy.get('@header')
              .invoke('text')
              .should('equal','Image Search')
  
        //Search text field is present
          cy.get('@inputText')
              .invoke('attr', 'id')
              .should('equal', 'bb-id-5')
  
        //Search button is present
          cy.get('@submitBtn')
              .invoke('attr', 'type')
              .should('equal', 'button')
      });
  
    it('Verify image results are shown when search term matches', () => {
        const searchTerm = 'star' //input search term with a match
        cy.get('@inputText').type(searchTerm)
        cy.get('@submitBtn').click()
        cy.get('img')
          .should('exist')
      });  
  
    it('Verify image search results matches the search term', () => {
        const searchTerm = 'star' //input search term with a match
        cy.get('@inputText').type(searchTerm)
        cy.get('@submitBtn').click()
        cy.get('img').each(($searchResult) => {
            cy.wrap($searchResult)
              .invoke('attr', 'alt')
              .should('include', searchTerm)
        });
            
    });
  
    it('Verify no image results are shown when search term has no match', () => {
        const searchTerm = 'sun123' //input search term with no match
        cy.get('@inputText').type(searchTerm)
        cy.get('@submitBtn').click()
        cy.get('img')
          .should('not.exist')
      });
  
    it('Verify search term is blank or null', () => {
          cy.get('@submitBtn').click()
          cy.get('img')
            .should('not.exist')
      });
  
    it('Verify clearing previous search', () => {
        const searchTerm = 'sun' //input search term with a match
        cy.get('@inputText').type(searchTerm)
        cy.get('@submitBtn').click()
        cy.get('@header').click()
        cy.get('img')
            .should('not.exist')
        cy.get('[id="bb-id-5"]').then(($txt) => {
          //expect($txt.get(0).innerText).to.eq('')
        cy.wrap($txt)
          .invoke('val')
          .should('eq','')
        });
      });
    });