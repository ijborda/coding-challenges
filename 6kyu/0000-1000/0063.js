// Title Case

function titleCase(title, minorWords) {
  if (title === '') return title
  return title.toLowerCase().split(' ').map((word, i) => {
    if (i === 0 || minorWords === undefined || !minorWords.toLowerCase().split(' ').includes(word)) {
      return word[0].toUpperCase() + word.slice(1)
    } else {
      return word
    }
  }).join(' ')
}

// // Test
// let x = titleCase('the quick brown fox')
// console.log(x) // 'A Clash of Kings'

console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')