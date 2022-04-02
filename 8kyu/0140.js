// Cat years, Dog years

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (4 * (humanYears - 2))
    let dogYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (5 * (humanYears - 2))
    return [humanYears, catYears, dogYears];
}