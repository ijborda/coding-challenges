// Count characters in your string

function count (string) {  
    return string.split('').reduce((acc, a) => {
        a in acc ? acc[a] += 1 : acc[a] = 1
        return acc
    }, {})
}

// Test
let x = count("aba")
console.log(x) // { a: 2, b: 1 }

let y = count("")
console.log(y) // {}