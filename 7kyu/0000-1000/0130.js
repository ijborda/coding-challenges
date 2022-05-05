// Working with arrays II (and why your code fails in some katas)

function removeNthElement(arr, n) {
    return arr.slice(0, n).concat(arr.slice(n + 1))
}

// Test
let x = removeNthElement([1, 2, 3, 4, 5], 4)
console.log(x) // [1, 2, 3, 4]