// Frequency sequence

function freqSeq(str, sep) {
    return [...str].map( (a, _, arr) => arr.filter(b => b === a).length).join(sep)
}

// Test
let x = freqSeq('hello world', '-')
console.log(x) // '1-1-3-3-2-1-1-2-1-3-1'