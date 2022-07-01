// Prefill an Array

function prefill(n, v) {
  if (n === true || n === false || !Number.isInteger(+n) || +n < 0) throw new TypeError(`${n} is invalid`);
  return Array.from(new Array(+n)).fill(v);
}

console.log(prefill(3,1)) // [1,1,1]);
console.log(prefill(2,'abc')) // ['abc','abc']);
console.log(prefill('1',1)) // [1]);
console.log(prefill(3, prefill(2,'2d'))) // [['2d','2d'],['2d','2d'],['2d','2d']]);
console.log(prefill(0, prefill(2,'2d'))) // []
console.log(prefill('xyz', 1)) // []