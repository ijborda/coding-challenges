// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function sumDigPow(a, b) {
    return Array.from(new Array(b - a + 1), (_, i) => i + a)
                .filter(a => a === +a.toString().split('').reduce((acc, d, i) => acc + Math.pow(d, i+1), 0))
}

// Test
let x = sumDigPow(10, 150)
console.log(x) // [89, 135]  

let y = sumDigPow(1, 10)
console.log(y) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  