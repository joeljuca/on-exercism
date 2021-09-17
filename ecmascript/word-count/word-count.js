class Words {
  count (phrase) {
    return phrase
      .toLowerCase()
      .split(/\s+/)
      .map(word => word.trim())
      .filter(Boolean)
      .reduce((index, word) => {
        if (!index.hasOwnProperty(word)) {
          index[word] = 0
        }
        
        index[word]++
        return index
      }, {})
  }
}

export default Words