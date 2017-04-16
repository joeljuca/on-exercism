function Pangram (input) {
  this.contents = input
}

Pangram.prototype.isPangram = function () {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  // Using for instead of map/forEach to be able to
  // break the loop if we found enough characters
  // during our checks
  for (var i = 0; i < this.contents.length; i++) {
    var char = this.contents[i].toLowerCase()
    
    if (alphabet.indexOf(char) >= 0) {
      var pos = alphabet.indexOf(char)
      
      alphabet = alphabet
        .substr(0, pos)
        .concat(alphabet.substr(pos + 1, alphabet.length))
      
      if (!alphabet.length) {
        break
      }
    }
  }
  
  return !alphabet.length
}

module.exports = Pangram