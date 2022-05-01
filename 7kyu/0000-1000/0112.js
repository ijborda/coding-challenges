// Number Pairs

function getLargerNumbers(a, b) {
    return a.map( (num, i) => Math.max(num, b[i]) )
}

// Test
let x = getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])
console.log(x) // [23, 64, 53, 17, 88]