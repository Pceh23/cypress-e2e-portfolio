import ProductsPage from '../../pages/ProductsPage'
import CartPage from '../../pages/CartPage'

describe('Carrinho', () => {
  beforeEach(() => {
    cy.loginDefault()
  })

  it('deve adicionar um produto ao carrinho', () => {
    ProductsPage.addToCartByName('Sauce Labs Backpack')
    ProductsPage.getCartBadge().should('have.text', '1')
    ProductsPage.goToCart()
    CartPage.getCartItems().should('have.length', 1)
    CartPage.getCartItemNames().should('contain', 'Sauce Labs Backpack')
  })

  it('deve adicionar múltiplos produtos ao carrinho', () => {
    ProductsPage.addToCartByName('Sauce Labs Backpack')
    ProductsPage.addToCartByName('Sauce Labs Bike Light')
    ProductsPage.getCartBadge().should('have.text', '2')
    ProductsPage.goToCart()
    CartPage.getCartItems().should('have.length', 2)
  })

  it('deve remover um produto do carrinho', () => {
    ProductsPage.addToCartByName('Sauce Labs Backpack')
    ProductsPage.goToCart()
    CartPage.removeItemByName('Sauce Labs Backpack')
    CartPage.getCartItems().should('have.length', 0)
  })

  it('deve voltar para a loja ao clicar em Continue Shopping', () => {
    ProductsPage.goToCart()
    CartPage.continueShopping()
    cy.url().should('include', '/inventory')
  })

  it('deve navegar para o checkout ao clicar em Checkout', () => {
    ProductsPage.addToCartByName('Sauce Labs Backpack')
    ProductsPage.goToCart()
    CartPage.proceedToCheckout()
    cy.url().should('include', '/checkout-step-one')
  })
})
