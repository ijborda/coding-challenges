// Digitize

function digitize(n) {
    return n.toString().split('').map(a => +a)
}

// Test
let x = digitize(8675309)
console.log(x) // [8,6,7,5,3,0,9]