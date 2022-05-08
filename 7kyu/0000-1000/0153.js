// Shortest Word

function findShort(s){
    return Math.min(...s.split(' ').map(a => a.length))
}

// Test
let x = findShort("bitcoin take over the world maybe who knows perhaps")
console.log(x) // 3