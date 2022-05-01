// Nth power rules them all!

function modifiedSum(a, n) {
    return a.map( num => num**n )
            .reduce( (acc, num) => acc + num, 0 ) - a.reduce( (acc, num) => acc + num, 0 )
}

// Test
let x = modifiedSum([1, 2, 3], 3)
console.log(x) // 30