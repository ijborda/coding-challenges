// Duplicate Encoder

function duplicateEncode(word){
    let freq = word.toLowerCase().split('').reduce((acc, a) => {
        a in acc ? acc[a] += 1 : acc[a] = 1
        return acc
    }, {})
    return word.toLowerCase().replace(/./g, a => freq[a] === 1 ? '(' : ')')
}

// Test
let x = duplicateEncode("CodeWarrior")
console.log(x) // )())())