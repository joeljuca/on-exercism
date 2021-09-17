class Bob {
  hey(message) {
    if (!message.trim().length) {
      return 'Fine. Be that way!'
    }
    if (/[a-z]/gi.test(message) && message === message.toUpperCase()) {
      return 'Whoa, chill out!'
    }
    else if (message[message.length -1] === '?') {
      return 'Sure.'
    }
    else {
      return 'Whatever.'
    }
  }
}

export default Bob