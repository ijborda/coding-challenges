// You're a square!

var isSquare = function(n){
    return Math.round(Math.pow(n, 0.5)) ** 2 === n;
}

// Test
let x = isSquare(4)
console.log(x) // True