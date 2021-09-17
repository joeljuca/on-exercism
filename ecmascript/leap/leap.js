const isDivisible = (x, y) => x % y === 0

const isLeapYear = (year) => {
  return isDivisible(year, 4) && (!isDivisible(year, 100) || isDivisible(year, 400))
}

export default isLeapYear