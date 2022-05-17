// Sum of Minimums!

function sumOfMinimums(arr) {
    return arr.reduce((acc, a) => acc + Math.min(...a), 0)
}

// Test
let x = sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])
console.log(x) // 9