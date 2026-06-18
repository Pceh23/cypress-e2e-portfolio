describe('API - JPetStore', () => {
  const baseUrl = Cypress.env('apiUrl') || 'https://petstore.octoperf.com'

  context('GET /actions/Catalog.action', () => {
    it('should return 200 for the catalog page', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/actions/Catalog.action`,
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.include('JPetStore')
      })
    })
  })

  context('GET product category', () => {
    it('should return 200 for Fish category', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/actions/Catalog.action?viewCategory=&categoryId=FISH`,
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.include('Fish')
      })
    })

    it('should return 200 for Dogs category', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/actions/Catalog.action?viewCategory=&categoryId=DOGS`,
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.include('Dogs')
      })
    })
  })

  context('POST - Login', () => {
    it('should authenticate with valid credentials', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/actions/Account.action`,
        form: true,
        body: {
          username: 'j2ee',
          password: 'j2ee',
          signon: 'Login',
        },
        followRedirect: true,
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })
})
