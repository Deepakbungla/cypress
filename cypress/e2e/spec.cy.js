describe('template spec', () => {
  it('passes', () => {
    cy.visit('192.168.33.10:8000/')
    // cy.get('a').and('have.attr', 'href');

    cy.get('p')
      .should('not.be.empty')
      .and(($p) => {
        expect($p).to.have.length(3);

        expect($p.first()).to.contain('Hello World')

        const classes = $p.map((i, el) => {
          return Cypress.$(el).attr('class')
        })

        expect(classes.get()).to.deep.eq([
          'text-primary',
          'text-danger',
          'text-default',
        ])
      })
  })

})