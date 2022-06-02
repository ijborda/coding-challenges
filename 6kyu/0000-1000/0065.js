// IP Validation

function isValidIP(str) {
  return str.split('.').every(a => +a <= 255 && +a >= 0 && (+a).toString() === a) && str.split('.').length === 4; 
}

// Test
console.log(isValidIP("137.255.156.100")) // True
console.log(isValidIP('123.456.789.0')) // False
console.log(isValidIP('01.02.03.04')) // False