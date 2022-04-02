// Multiplication table

multiplicationTable = function(size) {
    let multTable = []
    for (let i = 1; i <= size; i++) {
      let multRow = []
      for (let j = 1; j <= size; j++){
        multRow.push(i*j)
      }
      multTable.push(multRow)
    }
    return multTable
}