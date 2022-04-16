// Alphabet symmetry

function solve(arr){  
    return arr.map( str => {
        return str.split('').reduce( (count, char, i) => char.toLowerCase().charCodeAt() - 97 === i ? count + 1 : count, 0)
    })
};

// Test
let x = solve(["encode","abc","xyzD","ABmD"])
console.log(x)