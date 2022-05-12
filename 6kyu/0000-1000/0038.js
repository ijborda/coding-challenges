// Consonant value

function solve(s) {
    return Math.max(...s.split(/[aeiou]/)
                        .filter(a => a)
                        .map(a => a.split('').reduce((acc, b) => acc + b.charCodeAt() - 96, 0)))
};

// Solve 
let x = solve("zodiacs")
console.log(x) // 26