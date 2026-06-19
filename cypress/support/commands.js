// Login command reutilizável
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

// Login com credenciais padrão do env
Cypress.Commands.add('loginDefault', () => {
  cy.login(Cypress.env('username'), Cypress.env('password'))
})

// Adicionar produto ao carrinho pelo nome
Cypress.Commands.add('addToCartByName', (productName) => {
  cy.contains('.inventory_item_name', productName)
    .parents('.inventory_item')
    .find('.btn_primary.btn_inventory')
    .click()
})
