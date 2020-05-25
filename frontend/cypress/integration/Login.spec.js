describe('Login', function() {
  it('User logs in', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()
    cy.location('pathname').should('eq', '/login')
    cy.get('#username').click().type('asdf')
    cy.get('#password').click().type('asdf')
    cy.get('#login').click()
    cy.location('pathname').should('eq', '/searchbar')
  })
})
