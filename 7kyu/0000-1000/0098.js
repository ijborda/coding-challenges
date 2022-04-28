// Tetration

function tetration(x,y){
    return Array.from(new Array(y), a => x).reduce((acc, a, i) => i === 0 ? a*acc : a**acc, 1)
}

// Test
let x = tetration(3, 3)
console.log(x) // 7625597484987