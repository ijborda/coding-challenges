// Odd or Even? Determine that!

function oddOrEven(n) {
    return isEven(n) && isEven(n/2)  ? EVEN :
           isEven(n) && !isEven(n/2) ? ODD : EITHER
}
function isEven(n) {
    return n % 2 === 0
}

// Test
const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";
let x = oddOrEven(6)
console.log(x) // ODD