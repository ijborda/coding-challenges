// Aerial Firefighting

function waterbombs(fire, w) {
    return fire.split('Y').reduce((acc, a) => acc + Math.ceil(a.length / w), 0)
}

// Test
let x = waterbombs("xxYxx", 3)
console.log(x) // 2
let y = waterbombs("xxxxYxYx", 4)
console.log(y) // 3
let z = waterbombs("xxxxxYxYx", 2)
console.log(z) // 5