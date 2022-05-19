// Convert Integer to Binary

function toBinary(n){
    return (n >>> 0).toString(2)
}

// Test
let x = toBinary(3)
console.log(x) // 11
let y = toBinary(-3)
console.log(y) // 11111111111111111111111111111101