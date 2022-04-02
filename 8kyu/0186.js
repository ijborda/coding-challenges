// How old will I be in 2099?

function  calculateAge(birthYear, currentYear) {
    let age = Math.abs(currentYear - birthYear)
    return birthYear < currentYear ? `You are ${age} ${age === 1 ? "year" : "years"} old.` :
           birthYear > currentYear ? `You will be born in ${age} ${age === 1 ? "year" : "years"}.` : 
           'You were born this very year!'
}