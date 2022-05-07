// Array.diff

function arrayDiff(a, b) {
    return a.filter(num => !b.includes(num))
}

// Test
let x = arrayDiff([1,2,2,2,3],[2])
console.log(x) // [1, 3]