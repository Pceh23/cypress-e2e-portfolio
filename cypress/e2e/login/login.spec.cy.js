import LoginPage from '../../pages/LoginPage'

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  context('Login com sucesso', () => {
    it('deve realizar login com credenciais válidas', () => {
      LoginPage.login(Cypress.env('username'), Cypress.env('password'))
      cy.url().should('include', '/inventory')
      cy.get('.title').should('have.text', 'Products')
    })
  })

  context('Login com falha', () => {
    it('deve exibir erro ao usar usuário bloqueado', () => {
      LoginPage.login(Cypress.env('locked_user'), Cypress.env('password'))
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'Sorry, this user has been locked out')
    })

    it('deve exibir erro ao usar credenciais inválidas', () => {
      LoginPage.login(Cypress.env('invalid_user'), Cypress.env('invalid_password'))
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'Username and password do not match')
    })

    it('deve exibir erro ao deixar username vazio', () => {
      LoginPage.fillPassword(Cypress.env('password'))
      LoginPage.submit()
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'Username is required')
    })

    it('deve exibir erro ao deixar password vazio', () => {
      LoginPage.fillUsername(Cypress.env('username'))
      LoginPage.submit()
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'Password is required')
    })
  })
})
