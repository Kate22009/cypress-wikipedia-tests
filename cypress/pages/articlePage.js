class ArticlePage {
    static getArticleTitle() {
        throw new Error("Method not implemented.");
    }
   
    getArticleTitle() {
      return cy.get('h1#firstHeading').should('be.exist').invoke('text');
    }
}

export default ArticlePage;