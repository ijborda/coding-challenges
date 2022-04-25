// String ends with?

function solution(str, ending){
    let len = ending.length
    if (len === 0) return true
    return str.slice(-len) === ending.slice(-len)
}

// Test
let x = solution("sumo", "omo") 
console.log(x) // False