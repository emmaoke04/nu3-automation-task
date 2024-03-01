/// <reference types="Cypress" />

const userData = require("../fixtures/nu3login.json");

describe("Login Functionality and Local Storage Validation", () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
  });
  beforeEach(() => {
    cy.visit("/account/login");
    cy.get("#gdpr-confirm-all-button").click();
  });

  context("Positive Scenarios", () => {
    it("should display email and password placeholders", () => {
      cy.get("#CustomerEmail").should("have.attr", "placeholder", "E-Mail");
      cy.get("#CustomerPassword").should(
        "have.attr",
        "placeholder",
        "Passwort"
      );
    });

    it("should login with valid credentials", () => {
      cy.get("#CustomerEmail").type(userData.email);
      cy.get("#CustomerPassword").type(userData.password);
      cy.get('input[type="submit"].btn.btn-block.btn-secondary:eq(0)').click();
      cy.get("div.text-small").should("contain", userData.email);
    });
  });

  context("Negative Scenarios", () => {
    it("should display error message with invalid email", () => {
      cy.get("#CustomerEmail").type(userData.invalidemail);
      cy.get("#CustomerPassword").type(userData.password);
      cy.get('input[type="submit"].btn.btn-block.btn-secondary:eq(0)').click();
      cy.get(".errors > ul > li").should(
        "have.text",
        "Die E-Mail-Adresse oder das Passwort ist falsch."
      );
    });

    it("should display error message with invalid password", () => {
      cy.get("#CustomerEmail").type(userData.email);
      cy.get("#CustomerPassword").type(userData.invalidpassword);
      cy.get('input[type="submit"].btn.btn-block.btn-secondary:eq(0)').click();
      cy.get(".errors > ul > li").should(
        "have.text",
        "Die E-Mail-Adresse oder das Passwort ist falsch."
      );
    });
  });
  it("should login with valid credentials and validate local storage", () => {
    cy.login(userData.email, userData.password);
    cy.get("div.text-small").should("contain", userData.email);
    cy.window().then((win) => {
      const sessionData = JSON.parse(
        win.localStorage.getItem("SeStatisticSession")
      );
      expect(sessionData.session_id).to.exist;
    });
  });

  it("should update session on activity", () => {
    cy.login(userData.email, userData.password);
    cy.reload();
    cy.visit("/account");
    cy.window().then((win) => {
      const sessionData = JSON.parse(
        win.localStorage.getItem("SeStatisticSession")
      );
      console.log(sessionData.times_updated, "time_updated");
      expect(sessionData.state).to.equal("update");
    });
  });

  it("should ensure session information is consistent", () => {
    cy.login(userData.email, userData.password);
    cy.get("#nu3-logo").should("be.visible");
    cy.window().then((win) => {
      const sessionData = JSON.parse(
        win.localStorage.getItem("SeStatisticSession")
      );
      expect(sessionData).to.have.property("session_id");
    });
  });
});
