import { config as baseConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
  ...baseConfig,
  port: 4723,
  reporters: ['spec'],
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
  services: [
    [
      'appium',
      {
        command: 'appium',
        args: {
          relaxedSecurity: true,
        },
      },
    ],
  ],
};
