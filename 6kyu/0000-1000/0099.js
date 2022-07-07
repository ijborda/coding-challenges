// Find the Mine!

function mineLocation(field){
  let loc = []
  field.every((a, i) => {
    if (a.includes(1)) {
      loc[0] = i;
      loc[1] = a.indexOf(1);
      return false
    } else {
      return true
    }
  })
  return loc
}

// Test
console.log(mineLocation([ [1, 0], [0, 0] ]))// [0, 0]);
console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]))// [0, 0]);
console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]))// [2, 2]);