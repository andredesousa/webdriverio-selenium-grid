import { config as baseConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
  ...baseConfig,
  services: ['appium'],
  port: 4723,
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      platformName: 'Android',
      deviceName: 'Nexus 5 API 30',
      platformVersion: '11.0',
    },
  ],
};
