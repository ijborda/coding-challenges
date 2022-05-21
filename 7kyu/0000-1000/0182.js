// Password maker
function makePassword(phrase) {
    return phrase.split(' ').map(a => {
        return a[0].toLowerCase() === 'i' ? 1 :
               a[0].toLowerCase() === 'o' ? 0 :
               a[0].toLowerCase() === 's' ? 5 : a[0]
    }).join('')
}

// Test
let x = makePassword("Give me liberty or give me death")
console.log(x) // "Gml0gmd"