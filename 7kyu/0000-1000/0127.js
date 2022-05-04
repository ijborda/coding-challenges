// Isograms

function isIsogram(str){
    return [...new Set(str.toLowerCase().split(''))].length === str.length
}

// Test
let x = isIsogram("Dermatoglyphics")
console.log(x) // True