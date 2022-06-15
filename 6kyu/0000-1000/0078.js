// Two Joggers

var nbrOfLaps = function (x, y) {
  let lcm = lcm2(x, y);
  return [lcm / x, lcm / y]
}

function gcd2(a, b) {
  if(!b) return b===0 ? a : NaN;
  return gcd2(b, a%b);
}

function lcm2(a, b) {
  return a*b / gcd2(a, b)
}


// Test
console.log(nbrOfLaps(5, 3)) // [3,5]
console.log(nbrOfLaps(4, 6)) // [3,2]
console.log(nbrOfLaps(5, 5)) // [1,1]