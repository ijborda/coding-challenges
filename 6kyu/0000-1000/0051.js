// The Vowel Code

let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
}

function encode(string) {
    return string.split('').map(a => code[a] || a).join('')
}

function decode(string) {
    return string.split('').map(a => {
        if (a in Object.values(code)) {
            return Object.keys(code).find(b => a == code[b])
        } else {
            return a
        }
    }).join('')
}

// Test
let x = encode('hello')
let y = decode(x)
console.log(x, y) // h2ll4, hello