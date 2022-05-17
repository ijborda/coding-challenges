// Compress sentences

function compress(sentence) {
    let pos = {}
    Array.from( new Set (sentence.toLowerCase().split(' ')) ).forEach((a, i) => {
        pos[a] = i
    })
    return sentence.toLowerCase().split(' ').map(a => pos[a]).join('')
}

// Test
let x = compress("The number 0 is such a strange number Strangely it has zero meaning")
console.log(x) // 012345617891011
