import LoginPage from '../../pages/LoginPage'

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  context('Successful login', () => {
    it('should log in with valid credentials', () => {
      LoginPage.login('j2ee', 'j2ee')
      LoginPage.getUserGreeting().should('contain', 'j2ee')
    })
  })

  context('Failed login', () => {
    it('should show error message for invalid credentials', () => {
      LoginPage.login('invalid_user', 'wrong_password')
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'Invalid username or password')
    })

    it('should show error message when username is empty', () => {
      LoginPage.fillPassword('j2ee')
      LoginPage.submit()
      LoginPage.getErrorMessage()
        .should('be.visible')
    })

    it('should show error message when password is empty', () => {
      LoginPage.fillUsername('j2ee')
      LoginPage.submit()
      LoginPage.getErrorMessage()
        .should('be.visible')
    })
  })
})
