// Insert dashes

function insertDash(num) {
    return num.toString().replace(/([13579]{2,})/g, x => x.split('').join('-'))
} 

// Test
let x = insertDash(454793)
console.log(x) // 4547-9-3