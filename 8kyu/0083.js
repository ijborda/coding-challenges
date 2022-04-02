// If you can't sleep, just count sheep!!

var countSheep = function (num){
    return Array.from(new Array(num), (_, i) => 1 + i)
      .map( a => `${a} sheep...`)
      .join("")
}