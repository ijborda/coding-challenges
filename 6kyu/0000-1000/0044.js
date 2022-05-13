// Pyramid Array

function pyramid(n) {
    return Array.from(new Array(n), (_, i) => i + 1).map(a => Array.from(new Array(a), _ => 1))
}

// Test
let x = pyramid(3)
console.log(x) //  [ [1], [1, 1], [1, 1, 1] ]