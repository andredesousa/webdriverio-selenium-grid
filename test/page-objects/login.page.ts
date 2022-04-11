import { ChainablePromiseElement } from 'webdriverio';
import { Page } from './page';

export class LoginPage extends Page {
  public get inputUsername(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#username');
  }

  public get inputPassword(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#password');
  }

  public get btnSubmit(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('button[type="submit"]');
  }

  public get body(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('body');
  }

  /**
   * A method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string): Promise<void> {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.body.click(); // click outside
    await this.btnSubmit.click();
  }

  /**
   * Overwrite specific options to adapt it to page object
   */
  public open(): Promise<string> {
    return super.open('login');
  }
}
