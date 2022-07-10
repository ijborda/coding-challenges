// Are we alternate?

function isAlt(word) {
  const regexList = [new RegExp('[aeiou]'), new RegExp('[b-df-hj-np-tv-z]')];
  return regexList.every(regex => word.split(regex).every(a => a.length <= 1));
}

console.log(isAlt("amazon")); // true
console.log(isAlt("banana")); // true
console.log(isAlt("adiec")); // false
console.log(isAlt("apple")); // false
