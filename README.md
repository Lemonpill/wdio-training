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