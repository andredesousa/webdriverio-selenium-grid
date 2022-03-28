export const config: WebdriverIO.Config = {
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: 'test/tsconfig.json',
    },
  },
  specs: ['./test/specs/**/*.ts'],
  logLevel: 'warn',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  maxInstances: 8,
  capabilities: [
    {
      maxInstances: 4,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      excludeDriverLogs: ['*'],
      'goog:chromeOptions': {
        args: ['--headless', '--window-size=1920,1080'],
      },
    },
    {
      maxInstances: 4,
      browserName: 'firefox',
      acceptInsecureCerts: true,
      excludeDriverLogs: ['*'],
      'moz:firefoxOptions': {
        args: ['--headless', '--width=1920', '--height=1080'],
      },
    },
  ],
  services: ['chromedriver', 'geckodriver'],
  framework: 'jasmine',
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
  },
  reporters: ['spec'],
};
