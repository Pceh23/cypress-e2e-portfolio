class ProductsPage {
  visit() {
    cy.visit('/')
  }

  searchProduct(term) {
    cy.get('#searchContent').clear().type(term)
    cy.get('[name="searchProducts"]').click()
  }

  getProductList() {
    return cy.get('#Catalog table tr').not(':first')
  }

  clickProduct(productName) {
    cy.contains('a', productName).click()
  }

  getProductName() {
    return cy.get('#Catalog h2')
  }

  getProductDescription() {
    return cy.get('#Catalog p')
  }

  addToCart() {
    cy.contains('a', 'Add to Cart').first().click()
  }

  getStockStatus() {
    return cy.get('#Catalog table').contains('td', 'is available')
  }

  getOutOfStockItems() {
    return cy.get('#Catalog table').filter(':contains("Out of Stock")')
  }
}

export default new ProductsPage()
