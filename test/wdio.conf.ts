export const config: WebdriverIO.Config = {
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: 'test/tsconfig.json',
    },
  },
  framework: 'jasmine',
  jasmineOpts: {
    defaultTimeoutInterval: 30000,
  },
  logLevel: 'warn',
  specs: ['./test/specs/**/*.ts'],
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'reports/xml',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        addConsoleLogs: true,
      },
    ],
  ],
  bail: 0,
  waitforTimeout: 5000,
  connectionRetryTimeout: 60000,
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
};
