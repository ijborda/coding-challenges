// Find the total white and black areas in a strange chessboard

function solution(number){
    if (number <= 0) return 0
    return Array.from(new Array(number - 1), (_, i) => i + 1)
        .filter(a => a % 3 === 0 || a % 5 === 0)
        .reduce((sum, a) => sum + a, 0)
}

// Test
let x = solution(10)
console.log(x) // 23