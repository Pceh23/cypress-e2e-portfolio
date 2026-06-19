import ProductsPage from '../../pages/ProductsPage'

describe('Produtos', () => {
  beforeEach(() => {
    cy.loginDefault()
  })

  it('deve exibir a página de produtos após login', () => {
    cy.url().should('include', '/inventory')
    ProductsPage.getTitle().should('have.text', 'Products')
  })

  it('deve exibir 6 produtos na lista', () => {
    ProductsPage.getProductList().should('have.length', 6)
  })

  it('deve exibir nome e preço em todos os produtos', () => {
    ProductsPage.getProductNames().should('have.length', 6)
    ProductsPage.getProductPrices().should('have.length', 6)
  })

  it('deve ordenar produtos por nome (A-Z)', () => {
    ProductsPage.sortBy('az')
    ProductsPage.getProductNames().first().should('have.text', 'Sauce Labs Backpack')
  })

  it('deve ordenar produtos por preço (menor para maior)', () => {
    ProductsPage.sortBy('lohi')
    ProductsPage.getProductPrices().first().should('contain', '7.99')
  })

  it('deve navegar para a página de detalhe do produto', () => {
    ProductsPage.clickProductByName('Sauce Labs Backpack')
    cy.url().should('include', '/inventory-item')
    cy.get('.inventory_details_name').should('contain', 'Sauce Labs Backpack')
  })

  it('deve adicionar produto ao carrinho e atualizar badge', () => {
    ProductsPage.addToCartByIndex(0)
    ProductsPage.getCartBadge().should('have.text', '1')
  })
})
