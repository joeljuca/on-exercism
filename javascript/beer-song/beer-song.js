module.exports = BeerSong

function BeerSong () {}

BeerSong.prototype.verse = function (pos) {
  if (typeof pos !== 'number') {
    throw new Error('BeerSong#verse: expects a number argument equal or  greater than zero.')
  }

  var templates = {
    multiple: [
      '@bottles of beer on the wall, @bottles of beer.',
      'Take one down and pass it around, @bottles-1 of beer on the wall.'
    ].join("\n").concat("\n"),
    unique: [
      '1 bottle of beer on the wall, 1 bottle of beer.',
      'Take it down and pass it around, no more bottles of beer on the wall.'
    ].join("\n").concat("\n"),
    none: [
      'No more bottles of beer on the wall, no more bottles of beer.',
      'Go to the store and buy some more, 99 bottles of beer on the wall.'
    ].join("\n").concat("\n")
  }

  switch (pos) {
    case 0:
      return templates.none
    case 1:
    return templates.unique
    default:
    return templates.multiple
    .replace(
      /@bottles-1/g,
      (pos - 1) + ' bottle' + (pos >= 3 ? 's' : ''))
      .replace(/@bottles/g, pos + ' bottles')
  }
}

BeerSong.prototype.sing = function (start, end) {
  end = end >= 0 ? end : 0

  if (typeof start !== 'number' || typeof end !== 'number')
    throw new Error('BeerSong#sing: expects two numbers.')

  if (start < end)
    throw new Error('BeerSong#sing: start must be greater or equal to end.')

  var song = []

  for (var i = start; i >= end; i--) {
    song.push(this.verse(i))
  }

  return song.join("\n")
}
