module.exports = Anagram

function Anagram (word) {
  this.word = word.toLowerCase()
}

Anagram.prototype.matches = function (options) {
  if (typeof options === 'string')
    options = Array.prototype.slice.call(arguments)

  return options.filter(function (option) {
    option = option.toLowerCase()

    if (this.word === option || option.length !== this.word.length)
      return false

    var chars = this.word.split('')

    for (var i in option) {
      char = option[i]
      var j = chars.indexOf(char)

      if (j < 0) return false

      chars.splice(j, 1)
    }

    return true
  }, this)
}
