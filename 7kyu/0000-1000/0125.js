// Is n divisible by (...)?

function isDivisible(...args){
    return args.slice(1).every(a => args[0] % a === 0)
}

// Test
let x = isDivisible(12,3,4)
console.log(x) // True