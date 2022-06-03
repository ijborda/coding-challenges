// Validate Credit Card Number

function validate(n){
  return n.toString().split('').reverse().reduce((acc, a, i) => {
    if (i % 2 !== 0 && a*2 > 9) {
      return a*2 - 9 + acc;
    } else if (i % 2 !== 0 && a*2 <= 9) {
      return a*2 + acc;
    } else {
      return +a + acc;
    }
  }, 0) % 10 === 0;
}

// Test
console.log(validate(891)) //false;
console.log(validate(123)) //false;
console.log(validate(1)) //false;
console.log(validate(2121)) //true;
console.log(validate(1230)) //true;