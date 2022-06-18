// Pair of gloves

function numberOfPairs(gloves) {
  const num =  gloves.reduce((count, a) => {
    if (a in count) {
      count[a] += 1;
    } else {
      count[a] = 1;
    }
    return count;
  }, {});
  return Object.values(num).reduce((pairs, a) => {
    return pairs += Math.floor(a/2);
  }, 0);
}

// Test
console.log(numberOfPairs(['red','red'])) // ,1],
console.log(numberOfPairs(['red','green','blue'])) // ,0],
console.log(numberOfPairs(['gray','black','purple','purple','gray','black'])) // ,3]