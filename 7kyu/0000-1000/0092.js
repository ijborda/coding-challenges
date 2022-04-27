// Turn the Mars rover to take pictures

function turn(current, target) {
    let directions = ['N', 'E', 'S', 'W']
    return directions[ (directions.indexOf(current) + 1) % 4 ] === target ? 'right' : 'left';
}

// Test 
let x = turn('W', 'N')
console.log(x) // right