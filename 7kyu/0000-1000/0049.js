// ASCII letters from Number

function convert(number){
   return number.match(/\d{2}/g).map(d => String.fromCharCode(d)).join('')
}

// Test
let x = convert("656667")
console.log(x)