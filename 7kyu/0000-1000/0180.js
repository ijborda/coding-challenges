// Alternate case

function alternateCase(s) {
    return s.replace(/\w/g, a => a.toLowerCase() === a ? a.toUpperCase() : a.toLowerCase());
}

// Test
let x = alternateCase("Hello World")
console.log(x) // "hELLO wORLD"