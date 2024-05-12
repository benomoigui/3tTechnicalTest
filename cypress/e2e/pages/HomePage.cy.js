import HelperPage from '../../e2e/pages/HelperPage.cy';



class HomePage {
    navigateToURL() {
        cy.visit('https://www.amazon.co.uk/');
   }



Elements = {
    searchField: "input[id='twotabsearchtextbox']",
    selectSock: "img[class='s-image']",
    addToCartButton: "input[id='add-to-cart-button']",
    basket: "span[id='nav-cart-count']",
    deleteAddedSocks: "input[value='Delete']",
    YouramazonCartIsEmptyText: ".a-row > .a-spacing-mini",
    declineButton: "#sp-cc-rejectall-link",
   
}


searchForSocks() {

    cy.get(this.Elements.searchField).type('socks{enter}'); // Using {enter} to simulate pressing the Enter key
    HelperPage.waitForElement(this.Elements.selectSock); // Using Helper class method
    cy.get(this.Elements.selectSock).eq(1).click()
}

clickOnAddToCartButton() {
    HelperPage.waitForElement(this.Elements.addToCartButton);
    cy.get(this.Elements.addToCartButton).click()
}

itemAddedToBasket(expectedCount) {
    HelperPage.assertItemCount(this.Elements.basket, expectedCount);
}

clickOnBasket() {
    HelperPage.waitForElement(this.Elements.basket);
    cy.get(this.Elements.basket).click()
}

deletAddedSocks() {
    HelperPage.waitForElement(this.Elements.deleteAddedSocks);
    cy.get(this.Elements.deleteAddedSocks).click()
}

clickOnDeclineButton() {
    HelperPage.waitForElement(this.Elements.declineButton);
    cy.get(this.Elements.declineButton).click()
}

}

export default HomePage;