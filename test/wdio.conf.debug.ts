import { config as baseConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
  ...baseConfig,
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
    {
      maxInstances: 1,
      browserName: 'firefox',
      acceptInsecureCerts: true,
      excludeDriverLogs: ['*'],
      'moz:firefoxOptions': {
        args: ['--width=1920', '--height=1080'],
      },
    },
  ],
};
