// Backspaces in string

function cleanString(s) {
    while (s.includes('#')) {
        s = s.replace(/[^#]#/g, '')
        if (s.split('').every(a => a === '#')) {
            return ''
        }
        if (s[0] === '#') {
            s = s.split('').slice(1).join('')
        }
    }
    return s
}

// Test
let x = cleanString('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##')
console.log(x) // 6+yqw8hfklsd-=-f