// Training JS #32: methods of Math---round() ceil() and floor()

function roundIt(n){
    let left = n.toString().split(".")[0].length
    let right = n.toString().split(".")[1].length
    return left < right ? Math.ceil(n) :  
           left > right ? Math.floor(n) : Math.round(n)
}