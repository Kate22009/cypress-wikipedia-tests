class HelpPage {
   
  navigateToHelpPage() {
    cy.get("input[aria-label='Main menu']").click();
    cy.get('a[href="/wiki/Help:Contents"]').click();
}

}

export default HelpPage