// Training JS #14: Methods of Number object--toString() and toLocaleString()

function colorOf(r,g,b){
    return '#' + convertHex(r) + convertHex(g) + convertHex(b) 
}
  
function convertHex(x) {
    return x.toString(16).padStart(2, '0') 
}