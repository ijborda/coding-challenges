// Find the middle element

function gimme(triplet) {
    let max = Math.max(...triplet)
    let min = Math.min(...triplet)
    return triplet.findIndex( a => a < max && a > min )
}

// Test
let x = gimme([5, 10, 14])
console.log(x) // 1