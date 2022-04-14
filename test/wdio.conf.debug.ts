import { config as baseConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
  ...baseConfig,
  reporters: ['spec'],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      excludeDriverLogs: ['*'],
      'goog:chromeOptions': {
        args: ['--window-size=1920,1080'],
      },
    },
  ],
};
