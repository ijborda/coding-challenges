// Beginner Series #3 Sum of Numbers

function getSum(a, b){
    if (a > b) {
      let buffer = a
      a = b
      b = buffer
    }
    let sum = 0
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum
}