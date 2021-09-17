class Gigasecond {
  
  constructor (givenDate) {
    this._timestamp = +givenDate
    console.info('given timestamp', this._timestamp)
  }
  
  date () {
    return new Date(this._timestamp + 1000000000000)
  }
}

export default Gigasecond