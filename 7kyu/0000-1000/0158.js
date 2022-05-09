// Sum of odd numbers

function rowSumOddNumbers(n) {
    let start = (Array.from(new Array(n), (_, i) => i + 1).reduce((acc, a) => acc + a, 0) - n + 1) * 2 - 1
    return Array.from(new Array(n), (_, i) => i + 1)
                .map((_, i) => start + (i*2))
                .reduce((acc, a) => acc + a, 0)
}

// Test
let x = rowSumOddNumbers(42)
console.log(x) // 74088