// Count letters in string

function letterCount(s){
  return s.split('').reduce((acc, a) => {
    if (a in acc) {
      acc[a] += 1;
    } else {
      acc[a] = 1;
    }
    return acc
  }, {})
}

// Test
console.log(letterCount('arithmetics')) //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}