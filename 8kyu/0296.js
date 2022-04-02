// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

function howManySmaller(arr,n){
    return arr.map(a => a.toFixed(2)).filter(a => a < n).length    
}