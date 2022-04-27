// Turn with a Compass

function direction(facing, turn) {
    let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    let i = directions.indexOf(facing) + (turn / 45)
    return i < 0 ? directions.reverse()[ Math.abs(i + 1) % 8 ] : directions[ i % 8 ]
}

// Test
let x = direction("S", -405)
console.log(x) // "N"