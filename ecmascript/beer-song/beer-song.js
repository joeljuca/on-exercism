const template_many_bottles = `@bottles of beer on the wall, @bottles of beer.
Take one down and pass it around, @bottles-1 of beer on the wall.`

const template_one_bottle = `@bottles of beer on the wall, @bottles of beer.
Take it down and pass it around, @bottles-1 of beer on the wall.`

const template_no_bottle = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`

const bottlesLabel = amount => {
  if (!amount) {
    return 'no more bottles'
  } else if (amount === 1) {
    return '1 bottle'
  } else {
    return `${amount} bottles`
  }
}

const verse = number => {
  if (number === 1) {
    return template_one_bottle
      .replace(/@bottles-1/g, bottlesLabel(number - 1))
      .replace(/@bottles/g, bottlesLabel(number))
      .concat("\n")
  } else if (number) {
    return template_many_bottles
      .replace(/@bottles-1/g, bottlesLabel(number - 1))
      .replace(/@bottles/g, bottlesLabel(number))
      .concat("\n")
  }
  
  return template_no_bottle.concat("\n")
}

const sing = (start = 99, end = 0) => {
  const verses = []
  for (let i = start; i >= end; i--) verses.push(verse(i))
  return verses.join("\n")
}

export default { sing, verse }