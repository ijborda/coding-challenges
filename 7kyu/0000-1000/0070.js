// Are the numbers in order?

function inAscOrder(arr) {
    return arr.every( (num, i, a) => i === 0 ? true : num >= a[i - 1] )
}

// Test
let x = inAscOrder([1, 6, 10, 18, 18, 18, 20])
console.log(x) // FALSE