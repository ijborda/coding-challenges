// Spacify

function spacify(str) {
    return str.replace(/\w| /ig, a => ' ' + a).trim()
}

// Test
let x = spacify("hello world")
console.log(x) // returns "h e l l o   w o r l d"