module.exports = PhoneNumber

function PhoneNumber (phoneNumber) {
  this.phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
}

PhoneNumber.prototype.number = function () {
  switch (this.phoneNumber.length) {
    case 10:
      return this.phoneNumber
    case 11:
      if (this.phoneNumber[0] === '1') {
        return this.phoneNumber.substr(1)
      }
    default:
        return '0000000000'
  }
}

PhoneNumber.prototype.areaCode = function () {
  return this.number().substr(0, 3)
}

PhoneNumber.prototype.toString = function () {
  var n = this.number()

  return '($1) $2-$3'
    .replace('$1', n.substr(0, 3))
    .replace('$2', n.substr(3, 3))
    .replace('$3', n.substr(6, 4))
}
