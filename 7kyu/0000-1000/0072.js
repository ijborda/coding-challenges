// Simple string matching

function solve(a,b){
    let regex = new RegExp('^' + a.replace('*', '.*') + '$')
    return regex.test(b)
}

// Test
let x = solve("code.*s","codewars")
console.log(x) // TRUE