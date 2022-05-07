// Sum of Digits / Digital Root

function digital_root(n) {
    while (n.toString().length !== 1) {
        n = n.toString().split('').reduce((sum, a) => sum + +a, 0)
    }
    return n
}

// Test
let x = digital_root(456)
console.log(x) // 6