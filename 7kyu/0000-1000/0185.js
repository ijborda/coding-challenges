// Single digit

function singleDigit(n) {
    while (true) {
        if (n.toString().length === 1) {
            return n
        }
        n = n.toString(2).split('').reduce((acc, a) => acc + +a, 0)
    }
}

// Test
let x = singleDigit(1234444123)
console.log(x) // 1
let y = singleDigit(443566)
console.log(y) // 2