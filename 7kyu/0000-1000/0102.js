// Filter Long Words

function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(a => a.length > n)
}

// Test
let x = filterLongWords("The quick brown fox jumps over the lazy dog", 4)
console.log(x) // ['quick', 'brown', 'jumps']