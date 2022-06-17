// String average

function averageString(str) {
  const num = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  };
  const avg = str.split(' ').reduce((acc, a) => acc + num[a], 0) / str.split(' ').length;
  return Object.keys(num).find(a => num[a] === Math.floor(avg)) || "n/a";
}

// Test
console.log(averageString("zero nine five two")) //, "four");
console.log(averageString("four six two three")) //, "three");
console.log(averageString("one two three four five")) //, "three");
console.log(averageString("five four")) //, "four");
console.log(averageString("zero zero zero zero zero")) //, "zero");
console.log(averageString("one one eight one")) //, "two");
console.log(averageString("")) //, "n/a");