class Pangram {
  constructor (phrase) {
    this.phrase = phrase
  }
  
  isPangram () {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    const result = this.phrase
      .toLowerCase()
      .split('')
      .filter(char => new Boolean(char.trim()))
      .reduce((chars, char) => {
        if (chars.includes(char)) {
          const new_chars_array = chars.split('')
          new_chars_array.splice(chars.indexOf(char), 1)
          return new_chars_array.join('')
        }
        
        return chars
      }, alphabet)

    return !result.length
  }
}

export default Pangram