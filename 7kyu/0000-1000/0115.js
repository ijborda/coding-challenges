// Change two-dimensional array

function matrix(array) {
    return array.map( (row, i) => { 
        return row.map( (val, j) => {
             if (i === j && val < 0) {
                 return 0
             } else if (i === j && val >= 0) {
                 return 1
             } else {
                 return val
             }
        }) 
     } )
}

// Refactor
// function matrix(array) {
//     return array.map((c,i) => c.map((v, j) => i === j ? +!(v < 0): v))
// }


// Test
let x = matrix([[-1, 4, -5, -9, 3], [6, -4, -7, 4, -5], [3, 5, 4, -9, -1], [1, 5, -7, -8, -9], [-3, 2, 1, -5, 6]])
console.log(x) // 
// [
//     [ 0,  4, -5, -9,  3 ],
//     [ 6,  0, -7,  4, -5 ],
//     [ 3,  5,  1, -9, -1 ],
//     [ 1,  5, -7,  0, -9 ],
//     [-3,  2,  1, -5,  1 ]
// ]