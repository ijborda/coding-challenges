// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

function firstToLast(str,c){
    return str.lastIndexOf(c) !== -1 ? Math.max(str.lastIndexOf(c) - str.indexOf(c)) : -1
}