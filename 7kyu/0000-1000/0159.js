// Is this a triangle?

function isTriangle(a, b, c) {
   return a + b > c && b + c > a && a + c > b;
}

// Test
let x = isTriangle(5, 4, 1)
console.log(x) // False