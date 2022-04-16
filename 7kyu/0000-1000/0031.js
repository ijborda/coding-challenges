// Nth Root of a Number

function root(x, n) {
    return Math.pow(x, 1/n)
}

// Test
let x = root(6.25, 2)
console.log(x)