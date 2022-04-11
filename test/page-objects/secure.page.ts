import { ChainablePromiseElement } from 'webdriverio';
import { Page } from './page';

export class SecurePage extends Page {
  public get flashAlert(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#flash');
  }
}
