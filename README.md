## Allure reports

1. Run `npm install @wdio/allure-reporter` to install allure reporter (https://webdriver.io/docs/allure-reporter/)
2. Run `npm install -g allure-commandline --save-dev` to install cmd reporter tool (https://www.npmjs.com/package/allure-commandline)
3. Run `npx allure generate allure-results` after running a test in order to generate a report from results file (allure-results)
4. To generate reports automatically, run `npm i allure-commandline` and then add to wdio.conf.js

```
// wdio.conf.js
const allure = require('allure-commandline')

export const config = {
    // ...
    onComplete: function() {
        // autogenerate allure reports after test run
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
    // ...
}
```

5. Add logic to remove previously created results to wdio.conf.js

```
import fs from "fs";

...
  onPrepare: function (config, capabilities) {
    // removes previous results
    const resultsPath = ""./allure-results""
    if (fs.existsSync(resultsPath)) {
        fs.rmSync(resultsPath)
    }
  },
...
```

6. Run `npx allure open` to open the generated report


## ChatGPT conversation on WebdriverIO
### Key principles to keep in mind
These are the key principles that will help you create maintainable and reliable automated tests with WebdriverIO:

1. Use a Page Object Model (POM) to organize your tests and make them more maintainable. The POM pattern involves creating classes for each page in your application, with methods for interacting with elements on that page.

2. Use selectors wisely. Selectors are used to locate elements on a page, and it's important to use selectors that are unique and unlikely to change in the future.

3. Use assertions to validate that the expected outcome has occurred. Assertions are used to check that the state of the application is as expected after an action has been performed.

4. Use promises to handle asynchronous code. WebdriverIO uses promises to handle asynchronous interactions with the browser, so it's important to use them correctly in your tests.

5. Use hooks to set up and tear down test data. Hooks are functions that are run before and after the test suite, and they can be used to set up and clean up test data.

6. Use environment variables to configure the test environment. This allows for easy switching between environments, such as development, staging, and production.

7. Use a test runner like Jest or Mocha to organize and run your tests.

8. Use a test reporting tool like Allure or mochawesome to generate detailed reports of your test runs.

9. Use a test management tool like TestRail or Testlink to manage test cases and track the execution results

### Basic structure for a WebdriverIO project

```
project-name/
  |
  |- package.json
  |- wdio.conf.js
  |- /test/
     |
     |- /specs/
        |
        |- test1.js
        |- test2.js
        |- ...
     |- /page-objects/
        |
        |- homepage.js
        |- login.js
        |- ...
     |- /helpers/
        |
        |- test-data.js
        |- util.js
        |- ...
```

- package.json: This file contains the project's dependencies and scripts.
- wdio.conf.js: This is the configuration file for WebdriverIO. It contains settings for the test runner, reporter, and services.
- /test/: This is the main directory for the project's test files.
- /test/specs/: This directory contains the test files (also known as specs) that define the tests to be run.
- /test/page-objects/: This directory contains classes that represent pages in the application. Each class should have methods for interacting with elements on that page.
- /test/helpers/: This directory contains helper functions and classes that are used throughout the test suite, such as utility functions and test data.
