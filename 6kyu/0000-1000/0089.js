// Round by 0.5 steps

function solution(n){
  return Math.abs(n - Math.floor(n)) < .25 ? Math.floor(n) :
         Math.abs(n - Math.floor(n)) < .75 ? Math.floor(n) + 0.5 : Math.ceil(n)

}

// Test
console.log(solution(4.2)) // 4
console.log(solution(4.3)) // 4.5
console.log(solution(4.6)) // 4.5
console.log(solution(4.8)) // 5