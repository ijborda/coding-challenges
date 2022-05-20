// Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark

function remove (string) {
    return string.split(' ').filter(a => (a.match(/!/g) || []).length !== 1).join(' ')
}

// Test
let x = remove("Hi! !Hi Hi!")
console.log(x) // ""
let y = remove("Hi! !Hi! !Hi")
console.log(y) // "!Hi!"