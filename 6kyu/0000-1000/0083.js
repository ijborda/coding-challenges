// Matrix Addition

function matrixAddition(a, b){
  return a.map((row, i) => {
    return row.map((num, j) => {
      return num + b[i][j];
    })
  })
}

// Test
console.log(matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ]))
// [ [3, 4, 4],
//   [6, 4, 4],
//   [2, 2, 4] ]