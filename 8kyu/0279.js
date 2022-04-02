// Collatz Conjecture (3n+1)

var hotpo = function(n){
    if(n == 0 || n == 1) return 0;
    let ans = 0
    while (n !== 1) {
      n % 2 === 0 ? n = n / 2 : n = 3 * n + 1
      ans++
    }
    return ans  
}