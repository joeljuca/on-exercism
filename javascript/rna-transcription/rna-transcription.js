function DnaTranscriber () {}

var dnaToRnaMapping = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

DnaTranscriber.prototype.toRna = function (dna) {
  return dna
    .split('')
    .map(function (char) {
      if (!dnaToRnaMapping.hasOwnProperty(char)) {
        throw new Error('Invalid input')
      }
      
      return dnaToRnaMapping[char]
    })
    .join('')
}

module.exports = DnaTranscriber