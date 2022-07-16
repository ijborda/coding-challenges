// Group in 10s

function groupIn10s(...arr) {
  if (arr.length === 0) return [];
  arr = arr.sort((a, b) => a - b);
  let ans = Array.from(new Array( getGroup(Math.max(...arr)) + 1 )).map((_) => []);
  arr.forEach(a => {
    ans[getGroup(a)].push(a);
  })
  return ans.map(a => a.length === 0 ? undefined : a);
}
let getGroup = function(a) {
  return Math.floor(a/10);
}

// const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 
// console.log(grouped[0]);     // [3, 8]
// console.log(grouped[1]);     // [12, 17, 19]
// console.log(grouped[2]);     // [25]
// console.log(grouped[3]);     // [35, 38]
// console.log(grouped[4]);     // undefined
// console.log(grouped[5]);     // [50]
const grouped = groupIn10s([]) 
console.log(grouped)