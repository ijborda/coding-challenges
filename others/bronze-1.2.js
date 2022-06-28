function solve(n) {
  if (n === 0 || n === 1) {
    return n
  }
  return +Array.from(new Set(primeFactorization(n))).reduce((acc, a) => acc * (1 - 1/a), n).toFixed(0);
}

var primeFactorization = function primeFactorization(number, result) {
  var result = (result || []);
  var root = Math.sqrt(number);
  var x = 2;

  if (number % x) {
    x = 3;

    while ((number % x) && ((x = (x + 2)) < root)) {}
  }

  x = (x <= root) ? x : number;

  result.push(x);

  return (x === number) ? result : primeFactorization((number / x), result);
};