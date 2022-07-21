// Change it up

function changer(str) { 
  return str
    .split('')
    .map(char => nextLetter(char))
    .map(char => capCustom(char))
    .join('');  
}

let nextLetter = (x) => {
  if (/[a-z]/i.test(x)) {
    let charCode = x.charCodeAt() + 1 === 123 ? 97 :
                   x.charCodeAt() + 1 ===  91 ? 65 : x.charCodeAt() + 1;
    return String.fromCharCode(charCode)
  } else {
    return x
  }
}
let capCustom = (x) => {
  if (/[aeiou]/i.test(x)) {
    return x.toUpperCase();
  } else if (/[^aeiou]/i.test(x)) {
    return x.toLowerCase();
  } else {
    return x;
  }
}

// Test
console.log(changer('Cat30')) // , 'dbU30');
console.log(changer('Alice')) // , 'bmjdf');
console.log(changer('sponge1')) // , 'tqpOhf1');
console.log(changer('Hello World')) // , 'Ifmmp xpsmE');
console.log(changer('dogs')) // , 'Epht');
console.log(changer('z')) // , 'A');