// Binary Representation of an Integer

function showBits(n) {
    return (n >>> 0).toString(2).padStart(32, "0").split('').map(a => +a)
}

// Test
let x = showBits(-1)
console.log(x) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1]