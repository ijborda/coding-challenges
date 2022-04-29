// Character Counter

function validateWord(s) {
    let freq = [...s].map(a => a.toUpperCase())
                                .reduce((acc, a) => {
                                    a in acc ? acc[a] += 1 : acc[a] = 1
                                    return acc
                                }, {})
    return Object.values(freq).every((a, _, arr) => a === arr[0])
}

// Test
let x = validateWord("abc123")
console.log(x) // True