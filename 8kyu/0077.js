// Sum without highest and lowest number

function sumArray(array) {
    return Array.isArray(array) && array.length >= 2 ?
      array.reduce( (a,b)=>a+b, 0 ) - Math.max(...array) - Math.min(...array) : 0
}