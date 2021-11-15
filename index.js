let TestRunner = require('jest-runner')
if (TestRunner.default) {
  TestRunner = TestRunner.default
}

class SerialRunner extends TestRunner {
  constructor(...attr) {
    super(...attr)
    this.isSerial = true
  }
}

module.exports = SerialRunner
