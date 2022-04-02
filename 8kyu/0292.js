// Training JS #29: methods of arrayObject---concat() and join()

function bigToSmall(arr){
    return arr.reduce( (a, b) => a.concat(b), [] )
              .sort( (a, b) => b - a )
              .join(">")  
}