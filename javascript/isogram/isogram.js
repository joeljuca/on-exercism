function Isogram (input) {
  this.input = input
}

Isogram.prototype.isIsogram = function () {
  var char_marker = {}
  
  // Again, using `for` to be able to break the loop
  // even before ending it
  for (var i = 0; i < this.input.length; i++) {
    var char = this.input[i].toLowerCase()
    
    // I have no idea what this \u0080-\u00FF means. I found it here:
    // http://exercism.io/submissions/26aae786f308442aa60dbe725581bafb
    // btw, I'm definitely *not* implementing character matching
    // considering punctuation, etc.
    if (!char.match(/[a-z\u0080-\u00FF]/i)) continue
    
    if (char_marker[char]) {
      return false
    }
    
    char_marker[char.toLowerCase()] = true
  }
  
  return true
}

module.exports = Isogram