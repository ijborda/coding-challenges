// Training JS #16: Methods of String object--slice(), substring() and substr()

function cutIt(arr){
    let min = arr.reduce( (a, b) => b.length < a ? b.length : a, Infinity )
    return arr.map( a => a.slice(0,min) )
}