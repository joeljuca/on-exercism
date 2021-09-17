class PerfectNumbers {
  classify (number) {
    if (number <= 0)
      return 'Classification is only possible for natural numbers.'
    
    let aliquot = 0
    
    for (let i = 0; i < number; i++) {
      if (number % i === 0) aliquot += i
    }
    
    if (aliquot < number) return 'deficient'
    else if (aliquot > number) return 'abundant'
    else return 'perfect'
  }
}

export default PerfectNumbers