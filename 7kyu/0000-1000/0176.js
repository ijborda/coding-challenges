// Simple Fun #238: Tennis Game Points

function tennisGamePoints(score) {
    const tennis = {
        'love': 0,
        '15':   1,
        '30':   2,
        '40':   3
    }
    const p1 = score.split('-')[0]
    const p2 = score.split('-')[1]
    if (p2 === 'all') {
        return tennis[p1] * 2
    } else {
        return tennis[p1] + tennis[p2]
    }
}

// Test
let x = tennisGamePoints("15-40")
console.log(x) // 4

let y = tennisGamePoints("30-all")
console.log(y) // 4