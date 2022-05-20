// Driving School Series #2

function cost (mins) { 
    if (mins < 60) {
        return 30
    } else {
        mins -= 60
        let isGrace = mins % 30 <= 5
        if (isGrace) {
            return 30 + Math.floor(mins/30) * 10
        } else {
            return 30 + Math.ceil(mins/30) * 10
        }
    }
}

// Test
let x = cost(63) 
console.log(x) // 30
let y = cost(102)
console.log(y) // 50
    