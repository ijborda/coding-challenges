// Training JS #13: Number object and its properties

function whatNumberIsIt(n){
    return n === 1.7976931348623157e+308 ? 'Input number is Number.MAX_VALUE' :
           n === 5e-324 ? 'Input number is Number.MIN_VALUE' :
           isNaN(n) && typeof n === 'number'? 'Input number is Number.NaN' :
           n === Infinity ? 'Input number is Number.POSITIVE_INFINITY' :
           n === -Infinity ? 'Input number is Number.NEGATIVE_INFINITY' : `Input number is ${n}`
}