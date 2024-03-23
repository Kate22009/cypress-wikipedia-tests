/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.wikipedia.org/')
    cy.get('#js-link-box-en > strong').click();
  })

  it('Login link is visible', () => {
    cy.get('#pt-login-2 > a > span').should('be.visible');
  })

  it('Create Account link is visible', () => {
    cy.get('#pt-createaccount-2 > a > span').should('be.visible');

  })

  it('Button with drop down is visible', () => {
    cy.get('#vector-user-links-dropdown').should('be.visible');
  })
})