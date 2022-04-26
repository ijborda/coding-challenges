// Four/Seven

function fourSeven(n){
    let x = +((-n + 11).toString())
    return Math.abs(Number(x === 4 || x === 7) * x)
}

// Test 
let x = fourSeven(7)
console.log(x) // 7

// Check it out
function fourSeven(n){
    return n === 7 && 4 || n === 4 && 7 || 0;
}