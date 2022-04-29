// Count the Digit

function nbDig(n, d) {
    return Array.from(new Array(n+1), (_, i) => i**2).join('').split('').filter(a => a == d).length
}

// Test
let x = nbDig(5750, 0)
console.log(x) // 4700