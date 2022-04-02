// Count by X

function countBy(x, n) {
    let z = [];
    let num = 1;
    while (z.length !== n) {
      if (num % x === 0) {
        z.push(num)
      }
      num++
    }
    return z;
}