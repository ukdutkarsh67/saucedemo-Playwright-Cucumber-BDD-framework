// //loginSteps.ts
// import { Before, After, Given, When, Then } from '@cucumber/cucumber';
// import { chromium, Browser, Page } from 'playwright';
// import { expect } from 'playwright/test';
// import { LoginPage } from '../../pageObjects/LoginPage';

// let browser: Browser;
// let page: Page;
// let loginPage: LoginPage;

// Before(async () => {
//   browser = await chromium.launch();
//   page = await browser.newPage();
//   loginPage = new LoginPage(page);
// });

// After(async () => {
//   await browser.close();
// });

// Given('User has opened Swag Labs on the browser', async () => {
//   await loginPage.open();
// });

// When('User clicks the login button',async ()=>{
//     await loginPage.clickLoginButton();
// })

// When('User enters valid username and password', async () => {
//   await loginPage.login('standard_user', 'secret_sauce');
// });

// When('User enters invalid username and password', async () => {
//   await loginPage.login('invalid_user', 'invalid_password');
// });

// Then('Swag Labs title should be displayed at the top of the page', async () => {
//   const title = await page.title();
//   expect(title).toContain('Swag Labs');
// });

// Then('"Epic sad face: Sorry, this user has been locked out" message should be displayed', async () => {
//   const errorMessage = await loginPage.getErrorMessage();
//   expect(errorMessage).toContain('Sorry, this user has been locked out');
// });

// Then('the image should not show up', async () => {
//   const isImageMissing = await loginPage.isImageMissing();
//   await expect(isImageMissing).toBe(true);
// });

