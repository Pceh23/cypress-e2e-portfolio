class CartPage {
  getCartItems() {
    return cy.get('#Cart table tbody tr').not(':last')
  }

  getCartTotal() {
    return cy.get('#Cart table tfoot td').last()
  }

  updateQuantity(productName, quantity) {
    cy.contains('tr', productName)
      .find('input[name="quantity"]')
      .clear()
      .type(quantity)
    cy.contains('button', 'Update Cart').click()
  }

  removeItem(productName) {
    cy.contains('tr', productName)
      .find('a[href*="removeItemFromCart"]')
      .click()
  }

  proceedToCheckout() {
    cy.contains('a', 'Proceed to Checkout').click()
  }

  getEmptyCartMessage() {
    return cy.get('#Cart').contains('Your cart is empty')
  }
}

export default new CartPage()
