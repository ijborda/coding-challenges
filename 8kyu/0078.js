// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > (classPoints.reduce((a,b)=>a+b,0) + yourPoints)/(1 + classPoints.length)
}