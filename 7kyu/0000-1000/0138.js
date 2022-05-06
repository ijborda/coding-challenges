// last digits of a number

function lastDigit(n, d) {
    return n.toString().split('').slice(Math.max(n.toString().length - d, 0)).map(Number)
}

// Test
let x = lastDigit(34625647867585, 10)
console.log(x) // [5,6,4,7,8,6,7,5,8,5]