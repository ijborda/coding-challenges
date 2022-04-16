// You Got Change?

function giveChange(amount) {
    return [100, 50, 20, 10, 5, 1].map( a => {
        let num = Math.floor(amount / a)
        amount -= a * num
        return num
    }).reverse()
}

// Test
let x = giveChange(8)
console.log(x)