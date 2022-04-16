// Dropcaps

function dropCap(n) {
    return n.replace(/\w+/g, a => a.length > 2 ? a[0].toUpperCase() + a.slice(1).toLowerCase() : a)
}

// Test
let x = dropCap('more  than    one space to between words')
console.log(x)