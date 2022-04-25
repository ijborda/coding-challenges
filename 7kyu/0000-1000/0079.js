// Circle area inside square

function squareAreaToCircle(size){
    return Math.PI * (Math.pow(size, 0.5) / 2) ** 2;
}

// Test
let x = squareAreaToCircle(9)
console.log(x) // 7.0685834705770345