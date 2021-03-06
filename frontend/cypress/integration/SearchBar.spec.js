describe('SearchBar', function() {
  it('Search for wine', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()
    cy.location('pathname').should('eq', '/login')
    cy.get('#username').click().type('asdf')
    cy.get('#password').click().type('asdf')
    cy.get('#login').click()
    cy.location('pathname').should('eq', '/searchbar')
    cy.get('#search').click().type('merlot')
    cy.get('#submit').click()
    cy.location('pathname').should('eq', '/manual/results/wine/merlot')
    cy.contains('Merlot')
    cy.contains('Cheese Pairs')
    cy.contains('Learn More').click()
  })
})