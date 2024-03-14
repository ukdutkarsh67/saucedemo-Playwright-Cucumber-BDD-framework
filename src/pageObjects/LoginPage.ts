// LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInputField: Locator;
  private readonly passwordInputField: Locator;
  private readonly loginButton: Locator ;
  private readonly errorMessage: Locator;
  private readonly missingImage: Locator ;


  constructor(page: Page) {
    this.page = page;
    this.usernameInputField = page.locator('[data-test="username"]');
    this.passwordInputField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('.error-message');
    this.missingImage = page.locator('img[src=""]')

  }

  
  async open() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInputField.fill(username);
    await this.passwordInputField.fill(password);
    
  }

  async clickLoginButton(){
    await this.loginButton.click();
  }
  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.innerText();
  }

  async isImageMissing(): Promise<boolean> {
    return await this.missingImage.isVisible();
  }
}
