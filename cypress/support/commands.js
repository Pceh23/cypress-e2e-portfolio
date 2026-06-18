// Custom Cypress commands

/**
 * Login command — reusable across all specs
 * @example cy.login('j2ee', 'j2ee')
 */
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/actions/Account.action?signonForm=')
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get(':submit').click()
})

/**
 * Add product to cart by category and product index
 * @example cy.addToCart('Fish', 0)
 */
Cypress.Commands.add('addToCart', (category, index = 0) => {
  cy.visit('/')
  cy.contains('a', category).click()
  cy.get('#Catalog a').eq(index).click()
  cy.contains('a', 'Add to Cart').first().click()
})
