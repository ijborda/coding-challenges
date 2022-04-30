// Point in a unit circle

function pointInCircle(x, y) {
    return x**2 + y**2 < 1
}

// Test
let x = pointInCircle(0,0.9)
console.log(x) // True