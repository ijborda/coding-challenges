// The Supermarket Queue

function queueTime(customers, n) {
  let till = Array.from(new Array(n), a => 0);
  let time = 0;
  customers.forEach((c, i) => {
    if (till.indexOf(0) < 0) {
      time += Math.min(...till)
      till = till.map(a => a - Math.min(...till))
    }
    till[till.indexOf(0)] = c
  })
  return time + Math.max(...till)
}

// Test
// let x = queueTime([2,2,3,3,4,4], 2)
// console.log(x) // 9
let y = queueTime([10,2,3,3], 2)
console.log(y) // 10