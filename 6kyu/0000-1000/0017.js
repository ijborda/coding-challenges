// Replace With Alphabet Position

function alphabetPosition(text) {
    return text.toLowerCase()
        .replace(/[^a-z]/g, a => '')
        .replace(/[a-z]/g, a => a.charCodeAt() - 96 + ' ')
        .trim();
}

// Test
let x = alphabetPosition("The sunset sets at twelve o' clock.")
console.log(x) // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"