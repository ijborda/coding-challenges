// Regex validate PIN code

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

// Test
let x = validatePIN("12434")
console.log(x) // False