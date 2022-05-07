// Your order, please

function order(words){
    return words.split(' ').sort((a, b) => +a.match(/\d/) - +b.match(/\d/)).join(' ')
}

// Test
let x = order("is2 Thi1s T4est 3a")
console.log(x) // "Thi1s is2 3a T4est"