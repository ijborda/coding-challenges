// Halving Sum

function halvingSum(n) {
    if (n <= 1) {
        return n
    } else {
        return n + halvingSum( Math.floor(n/2) )
    }
}

// Test
let x = halvingSum(127)
console.log(x) // 247