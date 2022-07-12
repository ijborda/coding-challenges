// Delete occurrences of an element if it occurs more than n times

function deleteNth(arr,n){
  let ans = [];
  arr.forEach(a => {
    if (ans.freq(a) < n) {
      ans.push(a);
    }
  })
  return ans;
}
Array.prototype.freq = function(num) {
  return this.filter(a => a === num).length;
}

// Test
console.log(deleteNth([20,37,20,21], 1)) // , [20,37,21]
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) // , [1, 1, 3, 3, 7, 2, 2, 2]