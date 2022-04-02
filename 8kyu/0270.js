// Training JS #9: loop statement --while and do..while

function padIt(str,n){
    let padCount = 0;
    while (padCount < n) {
      str = padCount % 2 == 0 ? '*' + str : str + '*'
      padCount++
    }
    return str
}