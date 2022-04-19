// Find the capitals

var capitals = function (word) {
	let arr = []
    word.split('').forEach((c, i) => {
        if (c === c.toUpperCase()) arr.push(i)
    });
    return arr
};

// Test
let x = capitals('CodEWaRs')
console.log(x) // [0,3,4,6] 