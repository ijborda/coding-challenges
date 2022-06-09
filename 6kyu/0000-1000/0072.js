// Rectangle into Squares

function sqInRect(lng, wdth){
  if (lng === wdth) {
    return null;
  } else {
    let dim = [lng, wdth];
    let squares = [];
    while (true) {
      let min = Math.min(...dim)
      let max = Math.max(...dim)
      if (min === max) {
        return squares.concat([min]);
      }
      dim = dim.map(a => {
        return a === max ? max - min : min;
      })
      squares.push(min);
    }
  }
}

// Test
// console.log(sqInRect(5, 5)) // null
console.log(sqInRect(5, 3)) // [3, 2, 1, 1]
console.log(sqInRect(3, 5)) // [3, 2, 1, 1]
console.log(sqInRect(20, 14)) // [14, 6, 6, 2, 2, 2]