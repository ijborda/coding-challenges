// Sum of all arguments

function sum(...args) {
    return args.reduce((sum, a) => sum + a, 0)
}

// Test
let x = sum(1, 2, 3, 4, 5) 
console.log(x) // 15