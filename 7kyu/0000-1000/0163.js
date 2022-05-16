// Sum of a sequence

const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0
    return Array.from( new Array( Math.ceil((end - begin + 1)/step) ), (_, i) => begin + i * step )
                .reduce((acc, a) => acc + a, 0)
};

// Test
let x = sequenceSum(2, 6, 2)
console.log(x) // 12