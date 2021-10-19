const TestRunner = require('jest-runner').default

class SerialRunner extends TestRunner {
  constructor(...attr) {
    super(...attr)
    this.isSerial = true
  }
}

module.exports = SerialRunner
