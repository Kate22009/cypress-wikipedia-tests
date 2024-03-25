class ToolsPage {
  async clickOnMenu () {
      await cy.get('#vector-page-tools-dropdown-checkbox').click();
  }
}
export default ToolsPage;