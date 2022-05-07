// Create Phone Number

function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(-4).join('')}`
}

// Test
let x = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
console.log(x) // "(123) 456-7890"