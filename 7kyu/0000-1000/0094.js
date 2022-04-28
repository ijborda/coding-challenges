// Printer Errors

function printerError(s) {
    let numErr = [...s].filter(a => a.charCodeAt() >= 110).length
    return `${numErr}/${s.length}`
}

// Test
let x = printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
console.log(x) // 3/56 