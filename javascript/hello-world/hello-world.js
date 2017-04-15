function HelloWorld () {}

HelloWorld.prototype.hello = function (input) {
  input = input
    ? input
    : 'World'
  
  return 'Hello, ' + input + '!'
}

module.exports = HelloWorld