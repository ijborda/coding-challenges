// 'x' marks the spot.

const xMarksTheSpot = (input) => {
    let loc = []
    input.forEach( (row, i) => {
        if (row.includes('x')) {
            loc.push(i)
            row.forEach( (col, j) => {
                if (col === 'x') {
                    loc.push(j)
                }
            })
        }     
    });
    return loc.length === 2 ? loc : []
}         

// Test
let x = xMarksTheSpot([
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'x', 'x', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
])
console.log(x)