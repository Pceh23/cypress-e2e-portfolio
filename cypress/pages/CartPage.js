class CartPage {
  getCartItems() {
    return cy.get('.cart_item')
  }

  getCartItemNames() {
    return cy.get('.inventory_item_name')
  }

  removeItemByName(productName) {
    cy.contains('.inventory_item_name', productName)
      .parents('.cart_item')
      .find('.btn_secondary')
      .click()
  }

  continueShopping() {
    cy.get('[data-test="continue-shopping"]').click()
  }

  proceedToCheckout() {
    cy.get('[data-test="checkout"]').click()
  }

  getEmptyCartMessage() {
    return cy.get('.cart_list').should('not.contain', '.cart_item')
  }
}

export default new CartPage()
