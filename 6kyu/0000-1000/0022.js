// Detect Pangram

function isPangram(string){
    return [... new Set(string.toLowerCase().split('').filter(a => /[a-z]/.test(a)))].length === 26
}

// Test
let x = isPangram("The quick brown fox jumps over the lazy dog.")
console.log(x) // True