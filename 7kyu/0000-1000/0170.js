// Finding Remainder Without Using '%' Operator

const remainder = (D, d) => {
    return D - (Math.floor(D / d) * d)
};

// Test
let x = remainder(34, 7)
console.log(x) // 6