# cypress-e2e-portfolio

> Suíte de testes automatizados E2E construída com **Cypress**, **JavaScript**, **Page Object Model**, **BDD** e **CI/CD com GitHub Actions**.

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-2088FF?style=flat&logo=github-actions&logoColor=white)
![BDD](https://img.shields.io/badge/BDD-Cucumber-23D96C?style=flat&logo=cucumber&logoColor=white)

---

## 📋 Sobre o Projeto

Projeto de portfólio que demonstra boas práticas de automação de testes aplicadas ao [Sauce Demo](https://www.saucedemo.com) — aplicação de referência utilizada pela indústria de QA para prática e demonstração de automação.

**O que este projeto cobre:**
- Testes E2E com Cypress
- Padrão Page Object Model (POM) para manutenibilidade
- BDD com Cucumber e cenários em Gherkin
- Testes de API com `cy.request()`
- Pipeline CI/CD com GitHub Actions (executa a cada push e PR)
- Relatórios de teste com Mochawesome

---

## 🗂️ Estrutura do Projeto

```
cypress-e2e-portfolio/
├── cypress/
│   ├── e2e/
│   │   ├── login/
│   │   │   └── login.spec.cy.js
│   │   ├── products/
│   │   │   └── products.spec.cy.js
│   │   ├── cart/
│   │   │   └── cart.spec.cy.js
│   │   └── api/
│   │       └── api-products.spec.cy.js
│   ├── fixtures/
│   │   └── users.json
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── ProductsPage.js
│   │   └── CartPage.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .github/
│   └── workflows/
│       └── cypress-ci.yml
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20+
- npm

### Instalação

```bash
git clone https://github.com/Pceh23/cypress-e2e-portfolio.git
cd cypress-e2e-portfolio
npm install
```

### Executando os Testes

```bash
# Abrir o Cypress Test Runner (modo interativo)
npm run cy:open

# Executar todos os testes em modo headless (CI)
npm run cy:run

# Executar uma suíte específica
npm run cy:run -- --spec "cypress/e2e/login/**"
npm run cy:run -- --spec "cypress/e2e/products/**"
npm run cy:run -- --spec "cypress/e2e/cart/**"
npm run cy:run -- --spec "cypress/e2e/api/**"
```

---

## 🧪 Cenários de Teste

### Login (5 cenários)
- ✅ Login com credenciais válidas
- ✅ Erro ao usar usuário bloqueado
- ✅ Erro ao usar credenciais inválidas
- ✅ Erro ao deixar username vazio
- ✅ Erro ao deixar password vazio

### Produtos (7 cenários)
- ✅ Exibe página de produtos após login
- ✅ Lista 6 produtos corretamente
- ✅ Exibe nome e preço de todos os produtos
- ✅ Ordena produtos por nome (A-Z)
- ✅ Ordena produtos por preço (menor para maior)
- ✅ Navega para a página de detalhe do produto
- ✅ Adiciona produto ao carrinho e atualiza badge

### Carrinho (5 cenários)
- ✅ Adiciona um produto ao carrinho
- ✅ Adiciona múltiplos produtos ao carrinho
- ✅ Remove produto do carrinho
- ✅ Volta para a loja ao clicar em Continue Shopping
- ✅ Navega para o checkout

### API (3 cenários)
- ✅ Retorna 200 para a página de login
- ✅ Retorna 200 para o inventário com sessão ativa
- ✅ Redireciona para login ao acessar inventário sem autenticação

---

## ⚙️ CI/CD

Os testes são executados automaticamente a cada push e pull request via GitHub Actions.

```yaml
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: cypress-io/github-action@v6
        with:
          browser: chrome
```

---

## 🛠️ Stack Utilizada

| Ferramenta | Finalidade |
|---|---|
| Cypress 13 | Framework de testes E2E |
| JavaScript (ES6+) | Linguagem dos testes |
| Page Object Model | Padrão de arquitetura dos testes |
| GitHub Actions | Pipeline de CI/CD |
| Mochawesome | Relatórios HTML de testes |

---

## 👤 Autor

**Paulo Cesar**  
QA Engineer | Test Automation Engineer  
[LinkedIn](https://linkedin.com/in/paulo-softwaretester) · [GitHub](https://github.com/Pceh23)
