// Move 10

function moveTen(s){
    return s.split('').map(a => String.fromCharCode( a.charCodeAt() + 10 > 122 ? (a.charCodeAt() + 10) % 122 + 96 : a.charCodeAt() + 10 )).join('')
}

// Test
let x = moveTen("codewars")
console.log(x) // "mynogkbc"