// Count the number of cubes with paint on

var countSquares = function(cuts){
    return cuts === 0 ? 1 : Math.pow(cuts + 1, 3) - Math.pow(cuts - 1, 3)
}