// Holiday VI - Shark Pontoon

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let youTime = pontoonDistance / youSpeed
    let sharkTime = sharkDistance / sharkSpeed
    let isAlive =  dolphin ? youTime < sharkTime * 2 : youTime < sharkTime
    return isAlive ? "Alive!" : "Shark Bait!"
}