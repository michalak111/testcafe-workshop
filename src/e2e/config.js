const glob = require('glob')
const createTestCafe = require('testcafe')

let testcafe = null
const browsers = ['chrome', 'safari']

glob('**/*.e2e.js', function(er, testFiles) {
  createTestCafe('localhost', 1337, 1338)
    .then((tc) => {
      testcafe = tc
      const runner = testcafe.createRunner()

      return runner
        .src(testFiles)
        .browsers([...browsers])
        .run()
    })
    .then((failedCount) => {
      console.log('Tests failed: ' + failedCount)
      testcafe.close()
    })
})
