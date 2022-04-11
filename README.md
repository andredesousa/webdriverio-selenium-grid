# Testing web sites using Selenium Grid

This project provides a basic setup for testing websites using [WebdriverIO](https://webdriver.io/) with [Selenium Grid](https://www.selenium.dev/documentation/grid/).
Selenium Grid helps to master the computer (hub) to distributed test cases among the slave machines (nodes).

## Overview

Selenium Grid allows the execution of WebDriver scripts on remote machines by routing commands sent by the client to remote browser instances.
It aims to provide an easy way to run tests in parallel on multiple machines, and to manage different browser versions and browser configurations centrally.

Purposes and main functionalities of Selenium Grid:

- Central entry point for all tests
- Management and control of the nodes / environment where the browsers run
- Scaling
- Running tests in parallel
- Cross-platform testing
- Load balancing

This project provides a resource to start your Selenium Grid.
To deploy Selenium Grid on [Docker Swarm](https://docs.docker.com/engine/swarm/) use `docker stack deploy -c docker-compose.yml grid`.
After deploy, point your WebDriver tests to <http://localhost:4444>.
Stop it with `docker stack rm grid`.
Selenium project offers a Helm chart to deploy these Docker images to [Kubernetes](https://kubernetes.io/).
Read more details at the Helm [readme](https://github.com/SeleniumHQ/docker-selenium/blob/trunk/chart/selenium-grid/README.md).

Support for mobile browsers is provided via [Appium](https://appium.io/).
Appium is an open-source tool for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.

The next scripts should be executed in a console inside the root directory:

- `check` - Runs all checks.
- `lint` - Runs several static code analysis.
- `lint:fix` - Applies lint rules to project code.
- `test` - Runs the e2e tests.
- `test:watch` - Runs the e2e tests in watch mode.
- `test:debug` - Runs the e2e tests in debug mode.
- `test:android` - Runs the e2e tests in Android device.
- `test:grid` - Runs the e2e tests with a Selenium Grid.
- `clean` - Deletes the temporary files.

For more details, read the [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) documentation.

## Linting and formatting code

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.
[ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) help maintain the code quality.

It's recommended to use them in your projects because:

- They keep everybody on the same page, following the same rules.
- They save time in code reviews, because you can safely ignore all style issues, and focus on things that matter, like the structure and semantics of your code.
- They catch errors. Prettier, not so much, but ESLint catches a lot of syntax errors and simple forms of type errors, such as undefined variables.
- Setting these things up is a one-time cost, but the time-saving benefits compound over time.

Run `npm run lint` to analyze your code. Many problems can be automatically fixed with `npm run lint:fix`.
Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save.

## Running end-to-end tests

The end-to-end tests are responsible for testing scenarios on the product itself, by controlling the browser or the website, regardless of the internal structure to ensure expected behavior.

Use `npm run test` to execute the end-to-end tests via WebdriverIO.
Use `npm run test:watch` to keep executing your tests while watching for file changes in the background.
Use `npm run test:android` to execute the end-to-end tests in Android devices.

This project offers the possibility to run end-to-end tests on a Selenium Grid.
Use `npm run test:grid` to run the end-to-end tests on a Selenium Grid.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

## Debugging

You can use your IDE for debugging end-to-end tests.
Also, you can debug tests with `browser.debug()` to pause your test and inspect the browser.
If you run `npm run test:debug`, you need to open the `chrome://inspect` page.

## Reference documentation

For further reference, please consider the following articles:

- [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts)
- [Semantic Versioning](https://semver.org/)
- [WebdriverIO: Testrunner Configuration](https://webdriver.io/docs/configurationfile)
- [WebdriverIO: Debugging](https://webdriver.io/docs/debugging)
- [Appium: Getting Started](https://appium.io/docs/en/about-appium/getting-started/)
- [Selenium Grid](https://www.selenium.dev/documentation/grid/)
