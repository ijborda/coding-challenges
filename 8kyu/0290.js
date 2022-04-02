// Training JS #34: methods of Math---pow() sqrt() and cbrt()

function cutCube(volume,n){
    return isCubicNumber(n) && isCubicNumber(volume / n)
  }
  
function isCubicNumber(n) {
    let cubeRoot = Math.pow(n, 1 / 3)
    return Math.pow(Math.round(cubeRoot), 3) ===  n
}