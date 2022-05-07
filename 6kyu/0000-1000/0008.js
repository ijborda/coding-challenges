// Stop gninnipS My sdroW!

function spinWords(string){
    return string.split(' ').map(a => a.length >= 5 ? a.split('').reverse().join('') : a).join(' ')
}

// Test
let x = spinWords("Hey fellow warriors")
console.log(x) // Hey wollef sroirraw"