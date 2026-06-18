import ProductsPage from '../../pages/ProductsPage'

describe('Products', () => {
  beforeEach(() => {
    ProductsPage.visit()
  })

  it('should display product categories on homepage', () => {
    cy.get('#QuickLinks').should('be.visible')
    cy.contains('a', 'Fish').should('be.visible')
    cy.contains('a', 'Dogs').should('be.visible')
    cy.contains('a', 'Cats').should('be.visible')
  })

  it('should navigate to product detail page', () => {
    cy.contains('a', 'Fish').click()
    cy.get('#Catalog h2').should('contain', 'Fish')
    ProductsPage.getProductList().should('have.length.greaterThan', 0)
  })

  it('should show product information on detail page', () => {
    cy.contains('a', 'Dogs').click()
    cy.get('#Catalog a').first().click()
    ProductsPage.getProductName().should('be.visible')
    ProductsPage.getProductDescription().should('be.visible')
  })

  it('should display in-stock status for available products', () => {
    cy.contains('a', 'Fish').click()
    cy.get('#Catalog a').first().click()
    cy.get('#Catalog table').contains('is available').should('exist')
  })

  it('should search for a product by keyword', () => {
    ProductsPage.searchProduct('fish')
    cy.get('#Catalog table').should('be.visible')
    cy.url().should('include', 'search')
  })
})
