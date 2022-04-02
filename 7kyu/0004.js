// Growth of a Population

function nbYear(p0, percent, aug, p) {
    let numYears = 0
    let totalPop = p0
    while(totalPop < p) {
      totalPop = Math.floor((1 + percent/100) * totalPop + aug)
      numYears += 1
    }
    return numYears
}