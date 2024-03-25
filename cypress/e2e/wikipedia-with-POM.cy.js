/// <reference types="cypress" />
import BasePage from "../pages/basePage";
import ArticlePage from "../pages/articlePage";
import ToolsPage from "../pages/toolsPage";
import HelpPage from "../pages/helpPage";

describe("template spec", () => {
  let basePage;
  let articlePage;
  let toolsPage;
  let helpPage;

  it("Wikipedia Search and Navigation Test", () => {
    basePage = new BasePage();
    articlePage = new ArticlePage();

    // Navigate to Wikipedia
    basePage.navigateToWikipedia();
    cy.get("#js-link-box-en").click();
    cy.url().should("eq", "https://en.wikipedia.org/wiki/Main_Page");

    // Search for a term
    basePage.search("Cypress");
		cy.wait(2000);
		
    const articleTitle = articlePage.getArticleTitle();
    articleTitle.then((title) => {
      expect(title).to.contain("Cypress");
    });
  });

  it("Test if today's Featured Article is present", () => {
    basePage = new BasePage();
    articlePage = new ArticlePage();

    // Navigate to Wikipedia
    basePage.navigateToEnglishWikipedia();
    basePage.todaysFeaturedArticleExists().should("exist");
  });

  it("Test if Tools drop down menu works", () => {
    basePage = new BasePage();
    toolsPage = new ToolsPage();

    // Navigate to Wikipedia
    basePage.navigateToEnglishWikipedia();
    toolsPage.clickOnMenu();
    basePage.getElementTextByXPath().then((textContent) => {
      console.log(textContent);
      const expectedText = "General";
      expect(textContent.trim()).to.equal(expectedText);
    });
  });

  it("Test if page in Ukrainian works", () => {
    basePage = new BasePage();
    toolsPage = new ToolsPage();

    // Navigate to the Ukrainian page
    basePage.navigateToUkrainianPage();
    // XPath selector to locate the specific element
    cy.get("h1 span:nth-child(2)")
      .invoke("text")
      .then((textContent) => {
        console.log(textContent);
        const expectedText = "Ласкаво просимо до Вікіпедії,";
        expect(textContent.trim()).to.equal(expectedText);
      });
  });
  it("Test if redirect works correctly for Help page", () => {
    basePage = new BasePage();
    helpPage = new HelpPage();

    // Navigate to Wikipedia homepage
    basePage.navigateToEnglishWikipedia();

    // Navigate to Help page
    helpPage.navigateToHelpPage();

    // Assertion
    cy.url().should("eq", "https://en.wikipedia.org/wiki/Help:Contents");
  });
});
