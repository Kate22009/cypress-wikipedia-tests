/// <reference types="cypress" />
import BasePage from '../pages/basePage';
import ArticlePage from '../pages/articlePage';

describe('template spec', () => {
	let basePage;
	let articlePage;

	it('Wikipedia Search and Navigation Test', () => {
		basePage = new BasePage();
		articlePage = new ArticlePage();

		// Navigate to Wikipedia
		basePage.navigateToWikipedia();
		cy.get('#js-link-box-en').click();
		cy.url().should('eq', 'https://en.wikipedia.org/wiki/Main_Page');

		// Search for a term
		basePage.search("Cypress");
		const articleTitle = articlePage.getArticleTitle();
		articleTitle.then(title => {
			expect(title).to.contain("Cypress");
		});
	})

})
