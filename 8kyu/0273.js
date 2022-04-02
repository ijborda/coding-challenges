// Implement Array.prototype.filter()

Array.prototype.filter = function (func) {
    let ans = []
    for (let num of this) {
      if (func(num)) {
        ans.push(num)
      }
    }
    return ans
}