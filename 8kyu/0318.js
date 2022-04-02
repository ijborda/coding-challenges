// Arguments to Binary addition

function arr2bin(arr){
    return arr.map( a => typeof a !== 'number' || a === false ? 0 : a )
              .reduce( (sum, a) => sum + a, 0 )
              .toString(2)
}