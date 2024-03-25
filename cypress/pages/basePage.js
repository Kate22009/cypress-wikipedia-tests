class BasePage {
  navigateToWikipedia() {
    cy.visit("/");
  }

  search(query) {
    cy.get("#searchInput").type(query + '{enter}'+ '{enter}');
  }

  getElementTextByXPath() {
    return cy.get('div#p-tb').find('div.vector-menu-heading')
    .should('exist')
    .invoke('text')
  }

  todaysFeaturedArticleExists() {
    return cy.get('[id="From_today\'s_featured_article"]');
  }

  navigateToEnglishWikipedia(){
    cy.visit("https://en.wikipedia.org/wiki/Main_Page");
  }

  navigateToUkrainianPage() {
    cy.visit("https://uk.wikipedia.org/wiki/Main_Page");
  }
}

export default BasePage;
