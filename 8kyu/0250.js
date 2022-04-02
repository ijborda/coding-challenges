// Enumerable Magic #4 - True for None?

function none(arr, fun){
    return arr.every( x => fun(x) === false )
}