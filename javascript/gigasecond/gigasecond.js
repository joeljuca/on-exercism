function Gigasecond (input) {
  this._input = input
}

Gigasecond.prototype.date = function () {
  var output = new Date()
  output.setTime(this._input.getTime() + 1000000000000)

  return output
}

module.exports = Gigasecond