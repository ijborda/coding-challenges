// Valid Spacing

function validSpacing(s) {
    return s === s.trim().replace(/\s{1,}/g, ' ')
}

// Test
let x = validSpacing('Hello  world') 
console.log(x) // False