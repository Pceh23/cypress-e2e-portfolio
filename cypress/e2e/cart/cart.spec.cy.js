import LoginPage from '../../pages/LoginPage'
import ProductsPage from '../../pages/ProductsPage'
import CartPage from '../../pages/CartPage'

describe('Shopping Cart', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login('j2ee', 'j2ee')
  })

  it('should add a product to the cart', () => {
    cy.contains('a', 'Fish').click()
    cy.get('#Catalog a').first().click()
    cy.contains('a', 'Add to Cart').first().click()
    CartPage.getCartItems().should('have.length.greaterThan', 0)
  })

  it('should update product quantity in cart', () => {
    cy.contains('a', 'Fish').click()
    cy.get('#Catalog a').first().click()
    cy.contains('a', 'Add to Cart').first().click()
    cy.get('#Cart input[name="quantity"]').first().clear().type('3')
    cy.contains('button', 'Update Cart').click()
    cy.get('#Cart input[name="quantity"]').first().should('have.value', '3')
  })

  it('should remove a product from the cart', () => {
    cy.contains('a', 'Fish').click()
    cy.get('#Catalog a').first().click()
    cy.contains('a', 'Add to Cart').first().click()
    cy.get('#Cart a[href*="removeItemFromCart"]').first().click()
    CartPage.getEmptyCartMessage().should('be.visible')
  })
})
