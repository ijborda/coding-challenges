// Sum of all the multiples of 3 or 5

function findSum(n) {
    let nArr = []
    for (let i = 1; i <= n; i++) {
      nArr.push(i)
    }
    return nArr.reduce((sum, num) => num % 3 === 0 || num % 5 === 0 ? sum += num : sum += 0, 0);
}