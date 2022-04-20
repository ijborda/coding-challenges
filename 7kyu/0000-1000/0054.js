// Day of the Year

function toDayOfYear(arr) {
    let months = {
        1: 31,
        2: isLeapYear(arr[2]) ? 29 : 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31, 
        8: 31, 
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    return Array.from(new Array(arr[1]), (_, i) => i + 1)
        .map( a => a === arr[1] ? arr[0] : months[a])
        .reduce((sum, a) => sum + a, 0)
}
function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0) )
}

// Test
let x = toDayOfYear([5, 11, 1604])
console.log(x) // 121