// Helper.cy.js
class HelperPage {
    static waitForElement(selector, timeout = 10000) {
        cy.get(selector, { timeout }).should('be.visible');
    }

    static assertItemCount(selector, expectedCount) {
        cy.get(selector).invoke('text').then((text) => {
            const itemCount = Number(text.trim()); 
            expect(itemCount).to.eq(expectedCount);
        });
    }
    

    static assertPageTitle(expectedTitle) {
        cy.title().should('eq', expectedTitle);
    }

    static assertText(selector, expectedText) {
        cy.get(selector).should('include.text', expectedText);
    }

    static assertVisible(selector) {
        cy.get(selector).should('be.visible');
    }
}
export default HelperPage;