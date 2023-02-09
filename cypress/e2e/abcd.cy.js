describe('My First Test', () => {
    it('clicking "type" navigates to a new url', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/commands/actions')

      cy.get('.action-email').type('fake@email.com')

      cy.get('.action-focus').type('abcd')

      cy.get('#fullName1').type('Deepak Bungla')

      cy.get('#description').type('abcdef');

    //   cy.get('.action-email').should('have.value', 'fake@email.com')
    })
  })