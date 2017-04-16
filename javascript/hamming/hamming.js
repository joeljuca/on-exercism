function Hamming () {}

Hamming.prototype.compute = function (left, right) {
  if (left.length !== right.length) {
    throw new Error('DNA strands must be of equal length.')
  }
  
  var count = 0
  
  left
    .split('')
    .forEach(function (value, index) {
      if (value !== right[index]) count++
    })
  
  return count
}

module.exports = Hamming