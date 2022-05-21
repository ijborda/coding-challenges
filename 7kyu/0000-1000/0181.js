// Changing letters

function swap (string) {
    return string.replace(/[aeiou]/g, a => a.toUpperCase());
}

// Test
let x = swap("HelloWorld!")
console.log(x) // "HEllOWOrld!"