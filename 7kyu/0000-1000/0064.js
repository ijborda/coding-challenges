// Numerical Palindrome #1

function palindrome(num) { 
    return Number.isInteger(num) && num > 0 ? num.toString().split('').reverse().join('') == num : 'Not valid'
} 

// Test
let x = palindrome(-1)
console.log(x)