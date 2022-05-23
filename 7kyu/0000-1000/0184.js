// Sum of Cubes

function sumCubes(n){
    return Array.from(new Array(n), (_, i) => i + 1).reduce((acc, a) => acc + a**3, 0)
}

// Test
let x = sumCubes(123)
console.log(x) // 58155876 