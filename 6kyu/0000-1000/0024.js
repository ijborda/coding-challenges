// Convert string to camel case

function toCamelCase(str){
    return str.split(/[_-]/)
              .map((a, i) => i === 0 ? a : a[0].toUpperCase() + a.toLowerCase().slice(1))
              .join('')
}

// Test
let x = toCamelCase("the-stealth_warrior")
console.log(x) // "theStealthWarrior"