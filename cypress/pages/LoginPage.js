class LoginPage {
  visit() {
    cy.visit('/actions/Account.action?signonForm=')
  }

  fillUsername(username) {
    cy.get('#username').clear().type(username)
  }

  fillPassword(password) {
    cy.get('#password').clear().type(password)
  }

  submit() {
    cy.get(':submit').click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }

  getErrorMessage() {
    return cy.get('.messages .alert-danger, [class*="error"]')
  }

  getUserGreeting() {
    return cy.get('.header .greeting, [id*="WelcomeContent"]')
  }
}

export default new LoginPage()
