// Longest vowel chain

function solve(s){
    return Math.max(...s.match(/[aeiou]+/g).map(a => a.length))
}

// Test
let x = solve("chrononhotonthuooaos") 
console.log(x) // 5
let y = solve("iiihoovaeaaaoougjyaw")
console.log(y) // 8