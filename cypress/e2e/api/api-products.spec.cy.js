describe('API - Sauce Demo', () => {
  const baseUrl = 'https://www.saucedemo.com'

  context('GET - Páginas principais', () => {
    it('deve retornar 200 para a página de login', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/`,
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.include('Swag Labs')
      })
    })

    it('deve retornar 200 para a página de inventário com sessão', () => {
      // Login via UI para obter sessão
      cy.visit('/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.url().should('include', '/inventory')

      // Verificar que a página carregou corretamente
      cy.request(`${baseUrl}/inventory.html`).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })

  context('Validação de redirecionamento', () => {
    it('deve redirecionar para login ao acessar inventário sem autenticação', () => {
      cy.visit('/inventory.html', { failOnStatusCode: false })
      cy.url().should('eq', `${baseUrl}/`)
    })
  })
})
