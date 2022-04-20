// Return the closest number multiple of 10

const closestMultiple10 = num => {
    return Math.round(num / 10) * 10;
};

// Test
let x = closestMultiple10(55)
console.log(x)