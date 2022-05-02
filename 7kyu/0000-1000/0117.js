// shorter concat [reverse longer]

function shorter_reverse_longer(a, b){
    let long = a
    let short = b
    if (a.length < b.length) {
        long = b
        short = a
    }
    return short + long.split('').reverse().join('') + short
}

// Test
let x = shorter_reverse_longer("first", "abcde")
console.log(x) // "abcdetsrifabcde"