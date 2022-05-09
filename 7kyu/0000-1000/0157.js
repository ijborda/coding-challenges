// Number of People in the Bus

var number = function(busStops){
    return busStops.reduce((acc, a) => acc + a[0] - a[1], 0)
}

// Test
let x = number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])
console.log(x) // 17