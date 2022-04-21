// Simple Fun #154: Zero And One

function zeroAndOne(s) {
    return s.replace(/01|10/g, ' ').replace(/ /g, '').length
}

// Test
let x = zeroAndOne("110100")
console.log(x) // 6