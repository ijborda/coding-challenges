// The Office IV - Find a Meeting Room

function meeting(x){
    return x.indexOf('O') === -1 ? 'None available!' : x.indexOf('O')
}

// Test
let x = meeting(['X', 'O', 'X'])
console.log(x) // 1