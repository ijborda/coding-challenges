// Row Weights

function rowWeights(array){
    let weightTeam1 = 0
    let weightTeam2 = 0
    array.forEach((weight, index) => index % 2 === 0 ? weightTeam1 += weight : weightTeam2 += weight)
    return [weightTeam1, weightTeam2]
}