// Find the vowels

function vowelIndices(word){
    return [...word].map((a, i) => /[aeiouy]/i.test(a) ? i + 1 : '').filter(a => a)
}