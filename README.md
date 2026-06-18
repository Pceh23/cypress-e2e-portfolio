# cypress-e2e-portfolio

> E2E test automation suite built with **Cypress**, **JavaScript**, **Page Object Model**, **BDD/Cucumber**, and **GitHub Actions CI/CD**.

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-2088FF?style=flat&logo=github-actions&logoColor=white)
![BDD](https://img.shields.io/badge/BDD-Cucumber-23D96C?style=flat&logo=cucumber&logoColor=white)

---

## 📋 About This Project

This portfolio project demonstrates real-world test automation practices applied to the [JPetStore](https://petstore.octoperf.com) demo application.

**What this project covers:**
- E2E testing with Cypress
- Page Object Model (POM) pattern for maintainability
- BDD scenarios written in Gherkin with Cucumber
- API testing with `cy.request()`
- CI/CD pipeline with GitHub Actions (runs on every push and PR)
- Test reports with Mochawesome

---

## 🗂️ Project Structure

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

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Pceh23/cypress-e2e-portfolio.git
cd cypress-e2e-portfolio
npm install
```

### Running Tests

```bash
# Open Cypress Test Runner (interactive)
npm run cy:open

# Run all tests headless (CI mode)
npm run cy:run

# Run specific suite
npm run cy:run -- --spec "cypress/e2e/login/**"
```

---

## 🧪 Test Scenarios

### Login
- ✅ Successful login with valid credentials
- ✅ Error message displayed for invalid credentials
- ✅ Error message displayed for empty fields
- ✅ Logout flow

### Products
- ✅ Display product list on homepage
- ✅ Navigate to product detail page
- ✅ Out-of-stock product shows correct status

### Cart
- ✅ Add product to cart
- ✅ Update product quantity
- ✅ Remove product from cart
- ✅ Cart persists after page reload

### API
- ✅ GET /api/products returns 200
- ✅ Response contains required fields
- ✅ Product schema validation

---

## ⚙️ CI/CD

Tests run automatically on every push and pull request via GitHub Actions.

```yaml
# .github/workflows/cypress-ci.yml
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

## 📊 Test Report

After running tests, HTML report is generated at `cypress/reports/index.html` using Mochawesome.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| Cypress 13 | E2E test framework |
| JavaScript (ES6+) | Test language |
| Cucumber / Gherkin | BDD scenarios |
| Page Object Model | Test architecture pattern |
| GitHub Actions | CI/CD pipeline |
| Mochawesome | HTML test reports |

---

## 👤 Author

**Paulo Cesar**  
QA Engineer | Test Automation Engineer  
[LinkedIn](https://linkedin.com/in/paulo-softwaretester) · [GitHub](https://github.com/Pceh23)
