// Character frequency

function letterFrequency(text){
  return text.toLowerCase().split('').reduce((acc, a) => {
    if (/[a-z]/.test(a)) {
      let ind = -1;
      acc.every((arr, i) => {
        if (arr.includes(a)) {
          ind = i;
          return false
        } else {
          return true
        }
      })
      if (ind !== -1) {
        acc[ind][1] += 1;
      } else {
        acc.push([a, 1])
      }
    }
    return acc
  }, []).sort((a, b) => {
    if (b[1] - a[1] === 0) {
      return a[0].charCodeAt() - b[0].charCodeAt();
    } else {
      return b[1] - a[1];
    }
  })
}

// Test
console.log(letterFrequency('aaAabb dddDD hhcc')) // [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]