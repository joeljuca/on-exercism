function Bob () {}

Bob.prototype.hey = function (input) {
  if (input.trim().length === 0) {
    return 'Fine. Be that way!'
  }
  else if (input.match(/[a-zA-Z]/g) && input === input.toUpperCase()) {
    return 'Whoa, chill out!'
  }
  else if (input[input.length - 1] === '?') {
    return 'Sure.'
  }
  
  return 'Whatever.'
}

module.exports = Bob