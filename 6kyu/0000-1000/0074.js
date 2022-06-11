// Help the bookseller !

function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0) return ''
  return listOfCat.map(code => {
    let num = listOfArt.reduce((acc, books) => {
      if (books[0] === code) {
        return acc + Number(books.split(' ')[1])
      } else {
        return acc + 0
      }
    }, 0)
    return `(${code} : ${num})`
  }).join(' - ')
}

// Test
// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// c = ["A", "B"]
// console.log(stockList(b, c)) // "(A : 200) - (B : 1140)"

// d = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
// e = ["A", "B", "C", "W"]
// console.log(stockList(d, e)) // "(A : 0) - (B : 114) - (C : 70) - (W : 0)"

console.log(stockList(
  [], [ 'B', 'R', 'D', 'X' ]
))