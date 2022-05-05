// Working with arrays I (and why your code fails in some katas)

function withoutLast(arr) {
    return arr.slice(0,-1)
}

// Test
let x = withoutLast([1, 2, 3, 4, 5]) 
console.log(x) // [1, 2, 3, 4]