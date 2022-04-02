// Logical calculator

function logicalCalc(array, op){
    return array.reduce( (acc, x) => ans(acc, x, op) )
  }
  
  function ans(a, b, op) {
    return op === "AND" ? a && b : 
           op === "OR"  ? a || b :
           op === "XOR" && a + b === 1 ? true : false
}