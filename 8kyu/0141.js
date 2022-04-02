// N-th Power

function index(array, n){
    let ans = -1
    array.forEach((num, i) => { if (n === i) ans = num ** n })
    return ans
}