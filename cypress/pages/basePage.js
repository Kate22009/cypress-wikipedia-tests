class BasePage {
  navigateToWikipedia() {
    cy.visit("/");
  }

  search(query) {
    cy.get("#searchInput").type(query + '{enter}');
  }

  getElementTextByXPath(xpath) {
    const elementHandle = cy.xpath.$(xpath);

    if (!elementHandle) {
      throw new Error(`Element not found with XPath: ${xpath}`);
    }

    const textContent = elementHandle.text();
    return textContent.trim();
  }

  todaysFeaturedArticleExists() {
    return cy.get("#From_today's_featured_article");
  }

  navigateToUkrainianPage() {
    cy.visit("https://uk.wikipedia.org/wiki/Main_Page");
  }
}

export default BasePage;
