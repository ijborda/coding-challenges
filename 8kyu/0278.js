// Age Range Compatibility Equation

function datingRange(age){
    let min = Math.floor(age <= 14 ? age - 0.10 * age : (age / 2) + 7)
    let max = Math.floor(age <= 14 ? age + 0.10 * age : (age - 7) * 2)
    return `${min}-${max}`
}