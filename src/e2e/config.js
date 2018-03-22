const glob = require('glob')
const createTestCafe = require('testcafe')
require('dotenv').config()

let testcafe = null
const browsers = ['chrome', 'safari']
const browserstackBrowsers = ['browserstack:Chrome@53.0:Windows 10']

glob('**/*.e2e.js', (er, testFiles) => {
  createTestCafe('localhost', 1337, 1338)
    .then((tc) => {
      testcafe = tc
      const runner = testcafe.createRunner()

      return runner
        .src(testFiles)
        .browsers([...browsers, ...browserstackBrowsers])
        .screenshots('src/e2e/screenshots', true)
        .run()
    })
    .then((failedCount) => {
      console.log('Tests failed: ' + failedCount)
      testcafe.close()
    })
})
