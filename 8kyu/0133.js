// Enumerable Magic #20 - Cascading Subsets

function eachCons(array, n) {
    let ans = []
    let subarr = []
    for (let i = 0; i <= array.length - n; i++) {
      subarr = []
      for (let j = 0; j < n; j++) {
          subarr.push(array[i + j])
      }
      ans.push(subarr)
    }
    return ans
}