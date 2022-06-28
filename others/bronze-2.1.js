function one_cycle_speed(d, s) {
  const PI = 3.14;
  return +((2 * PI * (d/2) ) / s).toFixed(2);
}

console.log(one_cycle_speed(.8, .8)) // 3.14