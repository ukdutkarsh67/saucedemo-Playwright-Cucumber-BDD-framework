// LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInputField: Locator;
  private readonly passwordInputField: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;
  private readonly missingImage: Locator;


  constructor(page: Page) {
    this.page = page;
    this.usernameInputField = page.locator('[data-test="username"]');
    this.passwordInputField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.missingImage = page.locator('#item_4_img_link>img');

  }


  public async open() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  public async login(username: string, password: string) {
    await this.usernameInputField.fill(username);
    await this.passwordInputField.fill(password);

  }

  public async clickLoginButton() {
    await this.loginButton.click();
  }
  public async getErrorMessage(): Promise<string> {
    return await this.errorMessage.innerText();
  }

  public async isImageMissing(): Promise<any> {
    return await this.missingImage.getAttribute("src");
  }
}
