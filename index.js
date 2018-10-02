const TestRunner = require('jest-runner')

class SerialRunner extends TestRunner {
  constructor(dateStr) {
    super(dateStr)
    this.isSerial = true
  }
}

module.exports = SerialRunner
