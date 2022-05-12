// Encrypt this!

var encryptThis = function(text) {
    return text.split(' ')
               .map(word => {
                   return word.split('')
                              .map((a, i, arr) => {
                                if (i === 0) {
                                    return a.charCodeAt()
                                } if (i === 1) {
                                    return arr[arr.length - 1]
                                } if (i === arr.length - 1) {
                                    return arr[1]
                                } else {
                                    return a
                                }
                               }).join('')
               }).join(' ')
}

// Test
let x = encryptThis("A wise old owl lived in an oak")
console.log(x) // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"