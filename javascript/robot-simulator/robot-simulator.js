var Robot = (function () {
  var INSTRUCTION_KEYS = {A: 'advance', L: 'turnLeft', R: 'turnRight'}
  var VALID_DIRECTIONS = ['north', 'east', 'south', 'west']

  function Robot () {}

  Robot.prototype.orient = function (dir) {
    if (VALID_DIRECTIONS.indexOf(dir) === -1)
      throw new Error('Invalid Robot Bearing')

    this.bearing = dir
  }

  Robot.prototype.turnLeft = function () {
    var currentDirPos = VALID_DIRECTIONS.indexOf(this.bearing)
    var nextDirPos = currentDirPos > 0
      ? currentDirPos - 1
      : VALID_DIRECTIONS.length - 1

    this.bearing = VALID_DIRECTIONS[nextDirPos]
  }

  Robot.prototype.turnRight = function () {
    var currentDirPos = VALID_DIRECTIONS.indexOf(this.bearing)
    var nextDirPos = currentDirPos < (VALID_DIRECTIONS.length - 1)
      ? currentDirPos + 1
      : 0

    this.bearing = VALID_DIRECTIONS[nextDirPos]
  }

  Robot.prototype.at = function (x, y) {
    this.coordinates = [x, y]
  }

  Robot.prototype.advance = function () {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++;
        break;
      case 'east':
        this.coordinates[0]++;
        break;
      case 'south':
        this.coordinates[1]--;
        break;
      case 'west':
        this.coordinates[0]--;
        break;
    }
  }

  Robot.prototype.instructions = function (ins) {
    return ins
      .split('')
      .map(function (key) {
        return INSTRUCTION_KEYS[key]
      })
  }

  Robot.prototype.place = function (placement) {
    this.coordinates = [placement.x, placement.y]
    this.bearing = placement.direction
  }

  Robot.prototype.evaluate = function (ins) {
    var instance = this

    this.instructions(ins)
      .forEach(function (method) {
        instance[method].call(instance)
      })
  }

  return Robot
})()

module.exports = Robot
