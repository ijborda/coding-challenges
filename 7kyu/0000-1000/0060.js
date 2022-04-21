// Simple string characters

function solve(s){
    return [s.match(/[A-Z]/g).length || 0, 
            s.match(/[a-z]/g).length || 0,
            s.match(/[0-9]/g).length || 0, 
            s.match(/[^A-Z0-9]/gi).length || 0]
}

// Test
let x = solve("*'&ABCDabcde12345")
console.log(x) // [4,5,5,3]