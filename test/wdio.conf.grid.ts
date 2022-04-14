import { config as baseConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
  ...baseConfig,
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  protocol: 'http',
  maxInstances: 3,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      excludeDriverLogs: ['*'],
    },
    {
      maxInstances: 1,
      browserName: 'firefox',
      acceptInsecureCerts: true,
      excludeDriverLogs: ['*'],
    },
    {
      maxInstances: 1,
      browserName: 'MicrosoftEdge',
      acceptInsecureCerts: true,
      excludeDriverLogs: ['*'],
    },
  ],
  services: [],
};
