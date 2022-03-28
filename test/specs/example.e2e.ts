import { LoginPage } from '../page-objects/login.page';
import { SecurePage } from '../page-objects/secure.page';

describe('My Login application', () => {
  let loginPage: LoginPage;
  let securePage: SecurePage;

  beforeEach(async () => {
    loginPage = new LoginPage();
    securePage = new SecurePage();

    await loginPage.open();
  });

  it('should login with valid credentials', async () => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(securePage.flashAlert).toBeExisting();
    await expect(securePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
  });
});
