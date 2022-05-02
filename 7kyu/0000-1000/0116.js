// V A P O R C O D E

function vaporcode(string) {
    return string.replace(/\s/g, '').split('').map(a => a.toUpperCase()).join('  ')
}

// Test
let x = vaporcode("Lets go to the movies")
console.log(x) // "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"