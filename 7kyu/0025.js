// Maximum Length Difference

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1
    }

    let a1Max = Math.max(...a1.map( a => a.length))
    let a1Min = Math.min(...a1.map( a => a.length))

    let a2Max = Math.max(...a2.map( a => a.length))
    let a2Min = Math.min(...a2.map( a => a.length))

    return Math.max( Math.abs((a1Max - a2Min)), Math.abs((a1Min - a2Max)) )
}