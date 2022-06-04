// Mexican Wave

function wave(str){
  return str.split('').map((a, i) => {
    if (a === ' ') {
      return ''
    } else {
      return str.slice(0, i).toLowerCase() + str[i].toUpperCase() + str.slice(i+1).toLowerCase();
    }
  }).filter(a => a)
}

// Test
console.log(wave("hello")) // ["Hello", "hEllo", "heLlo", "helLo", "hellO"] 
console.log(wave("two words")) // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(wave("")) // []