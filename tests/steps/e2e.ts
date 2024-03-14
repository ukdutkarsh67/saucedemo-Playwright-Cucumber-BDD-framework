
import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import {expect } from "playwright-test-coverage";
import { LoginPage } from '../pageObjects/LoginPage';
import { ProductPage } from '../pageObjects/ProductPage';
import { CheckoutPage } from '../pageObjects/CheckoutPage';
let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let productPage: ProductPage;
let checkoutPage: CheckoutPage;
Before(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  productPage = new ProductPage(page);
  checkoutPage = new CheckoutPage(page);
});

After(async () => {
  await browser.close();
});



When('User clicks the Add to Cart button on the inventory page', async () => {
  await productPage.clickAddItemToCart('Sauce Labs Bike Light');

});

When('User clicks the cart icon on the inventory page', async () => {
  await productPage.clickShoppingCart();

});

When('User has on the cart page', async () => {
  await productPage.clickShoppingCart();
});

When('User fill all details', async () => {
  await checkoutPage.fillOutCheckoutForm("Utkarsh", "Dwivedi", "123384");
  await checkoutPage.clickContinue();

})

When('User will be redirected to the checkout overview page', async () => {
  await checkoutPage.clickCheckout();
  await checkoutPage.clickFinishButton();
})


Then('User should see the added product on the cart page with the corresponding details', async () => {
  const verifyAddedProduct = await productPage.isProductAdded('Sauce Labs Bike Light');
  expect(verifyAddedProduct).toBe(true);
});
