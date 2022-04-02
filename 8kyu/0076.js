// Sum of Multiples

function sumMul(n, m){
    return m <= 0 ? "INVALID" : Array.from( new Array(m - 1), (_, i) => 1 + i ).reduce( (sum, num) => num % n ? sum += 0: sum += num, 0) 
}