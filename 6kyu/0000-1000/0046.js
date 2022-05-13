// Pascal's Triangle

function pascalsTriangle(n) {
    let tri = []
    for (let i = 0; i < n; i++) {
        let row = []
        for (let j = 0; j < i + 1; j++) {
            let val = j === 0  ? 1 :
                      j === i  ? 1 : tri[i - 1][j - 1] + tri[i - 1][j]
            row.push(val)
        }
        tri.push(row)
    } 
    return [].concat(...tri)
 }

// Test
let x = pascalsTriangle(4)
console.log(x) // [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]

// Didn't work but close
// function pascalsTriangle(n) {
//     return [].concat(...Array.from(new Array(n), (_, i) => {
//         return Array.from(new Array(i + 1), (_, j) => {
//             return +(fac(i) / (fac(j) * fac(i - j))).toFixed(0)
//         })
//     }))
// }

// function fac(x) {
//     return +Array.from(new Array(x), (_, i) => i + 1).reduce((acc, a) => acc * a, 1).toFixed(0)
// }