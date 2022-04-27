// Exes and Ohs

function XO(str) {
    return (str.match(/x/gi)||[]).length === (str.match(/o/gi)||[]).length
}

// Test
let x = XO("xxOo")
console.log(x) // true