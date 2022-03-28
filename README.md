# Testing web sites using Selenium Grid

This project provides a basic setup for testing websites using [WebdriverIO](https://webdriver.io/) with [Selenium Grid](https://www.selenium.dev/documentation/grid/).
Selenium Grid helps to master the computer (hub) to distributed test cases among the slave machines (nodes).

## Overview

Selenium Grid allows the execution of WebDriver scripts on remote machines by routing commands sent by the client to remote browser instances.
It aims to provide an easy way to run tests in parallel on multiple machines, and to manage different browser versions and browser configurations centrally.

Generally speaking, there’s two reasons to use a grid:

- To run the tests against multiple browsers, multiple versions of browser, and browsers running on different operating systems.
- To reduce the time it takes for the test suite to complete a test pass.

Purposes and main functionalities of Selenium Grid:

- Central entry point for all tests
- Management and control of the nodes / environment where the browsers run
- Scaling
- Running tests in parallel
- Cross-platform testing
- Load balancing

[Docker Compose](https://docs.docker.com/compose/) is the simplest way to start a Grid.
Use the resource provided to start your Selenium Grid.
To deploy Selenium Grid on [Docker Swarm](https://docs.docker.com/engine/swarm/) use `docker stack deploy -c docker-compose.yml grid`.
Stop it with `docker stack rm grid`.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.

The next scripts should be executed in a console inside the root directory:

- `check` - Runs all checks.
- `lint` - Runs several static code analysis.
- `lint:fix` - Applies lint rules to project code.
- `test` - Runs the e2e tests.
- `test:watch` - Runs the e2e tests in watch mode.
- `test:debug` - Runs the e2e tests in debug mode.
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

This project offers the possibility to run end-to-end tests on a Selenium Grid.
Use `npm run test:grid` to run the end-to-end tests on a Selenium Grid.

## Debugging

You can use your IDE for debugging end-to-end tests.
Also, you can debug tests with `browser.debug()` to pause your test and inspect the browser.
If you run `npm run test:debug`, you need to open the `chrome://inspect` page.

## Commit messages convention

In order to have a consistent git history every commit must follow a specific template. Here's the template:

```bash
<type>(<ITEM ID>?): <subject>
```

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Jenkins, Travis, Circle, SauceLabs)
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: A commit that reverts a previous one
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **test**: Adding missing tests or correcting existing tests

### ITEM ID

The related **issue** or **user story** or even **defect**.

- For **user stories**, you shoud use `US-` as prefix. Example: `feat(US-4321): ...`
- For **no related issues** or **defects** you should leave it blank. Example: `feat: ...`

### Subject

The subject contains a succinct description of the change.

## Reference documentation

For further reference, please consider the following articles:

- [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts)
- [Semantic Versioning](https://semver.org/)
- [WebdriverIO: Testrunner Configuration](https://webdriver.io/docs/configurationfile)
- [WebdriverIO: Debugging](https://webdriver.io/docs/debugging)
- [Selenium Grid](https://www.selenium.dev/documentation/grid/)
