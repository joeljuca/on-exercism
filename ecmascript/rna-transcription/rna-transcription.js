class Transcriptor {
  toRna (dna) {
    const dnaToRna = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U'
    }
    const possibleValues = Object.keys(dnaToRna)
    
    return dna.split('')
      .map(c => {
        if (!possibleValues.includes(c)) {
          throw new Error('Invalid input DNA.')
        }
        
        return dnaToRna.hasOwnProperty(c)
          ? dnaToRna[c]
          : c
      })
      .join('')
  }
}

export default Transcriptor
