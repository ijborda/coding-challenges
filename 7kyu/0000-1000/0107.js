// Fix string case

function solve(s){
    let count = [...s].reduce((acc, a) => {
                    a === a.toLowerCase() ? acc[0] +=1 : acc[1] += 1
                    return acc
                }, [0, 0])
    return count[0] < count[1] ? s.toUpperCase() : s.toLowerCase()
}

// Test
let x = solve("Code")
console.log(x) // code