// Narcissistic Numbers

function isNarcissistic(n){
    let pow = n.toString().split('').length
    return n === n.toString().split('').reduce((sum, a) => sum + Math.pow(+a, pow), 0)
}

// Test
let x = isNarcissistic(1634)
console.log(x) // True