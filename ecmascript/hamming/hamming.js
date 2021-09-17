class Hamming {
  compute (s1, s2) {
    if (s1.length !== s2.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    let count = 0;

    s1
      .split('')
      .forEach((strand, index) => {
        if (strand !== s2[index]) count++
      })

    return count
  }
}

export default Hamming
