import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../pageObjects/LoginPage';
import {expect } from "playwright-test-coverage";
let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Before(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginPage = new LoginPage(page);
});

After(async () => {
    await browser.close();
});

Given('User has opened Swag Labs on the browser', async () => {
    await loginPage.open();
});

When('User clicks the login button', async () => {
    await loginPage.clickLoginButton();
})

When('User enters valid username {string} and password {string}', async (username:string,password:string) => {
    await loginPage.login(username, password);
});

When('User enters invalid username and password', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
});

Then('Swag Labs title should be displayed at the top of the page', async () => {
    const title = await page.title();
    expect(title).toContain('Swag Labs');
});

Then('"Epic sad face: Sorry, this user has been locked out" message should be displayed', async () => {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Sorry, this user has been locked out');
});

Then('the image should not show up', async () => {
    const imgElement = await loginPage.isImageMissing();
    await expect(imgElement).not.toBe('/static/media/sl-404.168b1cce.jpg');
});

