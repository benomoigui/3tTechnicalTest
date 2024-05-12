import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

import HelperPage from "../../e2e/pages/HelperPage.cy";
import HomePage from "../../e2e/pages/HomePage.cy";


const homePage = new HomePage()
const helperPage = new HelperPage()

Given(`the user is on the Amazon homepage`, () => {
    homePage.navigateToURL()
    homePage.clickOnDeclineButton()
});

When(`the user searches for {string}`, (string) => {
    homePage.searchForSocks() 
});

When(`the user adds the first pair of socks listed to the cart`, () => {
    homePage.clickOnAddToCartButton()
});

Then(`the cart should display at least one pair of socks`, () => {
    homePage.itemAddedToBasket(1)
});

When(`the user clicks on the basket`, () => {
    homePage.clickOnBasket()
});

When(`the user deletes the added sock from the cart`, () => {
    homePage.deletAddedSocks();
});

Then(`the cart should be empty`, () => {
    HelperPage.assertText(homePage.Elements.YouramazonCartIsEmptyText, "Your Amazon Cart is empty.");
    homePage.itemAddedToBasket(0)
    HelperPage.assertPageTitle("Amazon.co.uk Shopping Basket")
});