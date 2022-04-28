// Substring fun

function nthChar(words){
    return Array.from(new Array(words.length), (_, i) => words[i][i]).join('')
}

// Test
let x = nthChar(['yoda', 'best', 'has'])
console.log(x) // ''yes