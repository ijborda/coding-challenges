// Case Swapping

function swap(str){
    return str.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
}

// Test
let x = swap('HelloWorld')
console.log(x)