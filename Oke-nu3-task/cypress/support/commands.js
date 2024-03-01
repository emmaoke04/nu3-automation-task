Cypress.Commands.add("login", function (email, password) {
  cy.get("#CustomerEmail").type(email);
  cy.get("#CustomerPassword").type(password);
  cy.get('input[type="submit"].btn.btn-block.btn-secondary:eq(0)').click();
  cy.get("div.text-small").should("contain", email);
});
