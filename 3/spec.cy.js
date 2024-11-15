describe('Testing Saucedemo', () => {
  beforeEach(() => {
   
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory');
  });

  const getPrices = () => {
    return cy.get('.inventory_item_price').then((elements) =>
      [...elements].map((el) => parseFloat(el.innerText.replace('$', '')))
    );
  };

  it('sorts products by price low to high', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi');

    getPrices().then((prices) => {
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    });
  });

  it('sorts products by price high to low', () => {
    cy.get('[data-test="product-sort-container"]').select('hilo');

    getPrices().then((prices) => {
      const sortedPrices = [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal(sortedPrices);
    });
  });

  it('Checkout', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get('[data-test="shopping-cart-link"]').click(); 

    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type('Ivan');
    cy.get('[data-test="lastName"]').type('Ivanov');
    cy.get('[data-test="postalCode"]').type('629000');

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="finish"]').click();

    cy.get('[data-test="back-to-products"]').click();

  });
});
