class ProductsPage {
  getTitle() {
    return cy.get('.title')
  }

  getProductList() {
    return cy.get('.inventory_item')
  }

  getProductNames() {
    return cy.get('.inventory_item_name')
  }

  getProductPrices() {
    return cy.get('.inventory_item_price')
  }

  addToCartByIndex(index = 0) {
    cy.get('.btn_primary.btn_inventory').eq(index).click()
  }

  addToCartByName(productName) {
    cy.contains('.inventory_item_name', productName)
      .parents('.inventory_item')
      .find('.btn_primary.btn_inventory')
      .click()
  }

  getCartBadge() {
    return cy.get('.shopping_cart_badge')
  }

  goToCart() {
    cy.get('.shopping_cart_link').click()
  }

  sortBy(option) {
    cy.get('[data-test="product_sort_container"]').select(option)
  }

  clickProductByName(productName) {
    cy.contains('.inventory_item_name', productName).click()
  }
}

export default new ProductsPage()
