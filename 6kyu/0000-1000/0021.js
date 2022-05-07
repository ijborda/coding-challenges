// Find the missing letter

function findMissingLetter(array) {
    let prev = array.find((a, i, arr) => (arr[i + 1].charCodeAt() - a.charCodeAt()) !== 1)
    return String.fromCharCode( prev.charCodeAt() + 1 );
}

// Test
let x = findMissingLetter(['a','b','c','d','f'])
console.log(x) // e