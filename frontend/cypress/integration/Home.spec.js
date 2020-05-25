describe('Home page', function() {
  it('Can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Get Started')
    cy.contains('See How It Works')
    cy.contains('Login')
    cy.contains('Create Account')
  })
  it('Get started can be clicked and redirects to /createaccount', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Get Started').click()
    cy.location('pathname').should('eq', '/createaccount')
  })
  it('See how it works can be clicked and redirects to /searchbar', function() {
    cy.visit('http://localhost:3000')
    cy.contains('See How It Works').click()
    cy.location('pathname').should('eq', '/searchbar')
  })
  it('Create account can be clicked and redirects to /createaccount', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Create Account').click()
    cy.location('pathname').should('eq', '/createaccount')
  })
  it('Login can be clicked and redirects to /login', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()
    cy.location('pathname').should('eq', '/login')
  })
})