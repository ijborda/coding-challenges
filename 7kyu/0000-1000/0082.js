// Two to One

function longest(s1, s2) {
    return Array.from(new Set((s1 + s2).split(''))).sort((a, b) => a.localeCompare(b)).join('')
}

// Test
let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
let x = longest(a, b)
console.log(x) // "abcdefklmopqwxy"