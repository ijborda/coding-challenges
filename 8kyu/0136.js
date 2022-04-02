// Remove First and Last Character Part Two

function array(arr){
    let arrSplit = arr.split(",")
    return arrSplit.length <= 2 ? null : arrSplit.slice(1, arrSplit.length - 1).join(" ")
}