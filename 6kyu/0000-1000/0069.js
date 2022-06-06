// Make the Deadfish Swim

// Return the output array, and ignore all non-op characters
function parse( data ) {
  let output = [];
  let val = 0;
  data.split('').forEach((a, i) => {
    if (a === 'o') {
      output.push(val);
    } else if (a === 'i') {
      val = val + 1;
    } else if (a === 'd') {
      val = val - 1;
    } else if (a === 's') {
      val = val ** 2;
    } else {
      val = val;
    }
  });
  return output;
}

// Test
console.log(parse("iiisdoso")) // [ 8, 64 ]
console.log(parse("iiisxxxdoso")) // [8, 64]