// Evens and Odds

function evensAndOdds(num){
	return num % 2 === 0 ? num.toString(2) : num.toString(16)
}

// Test
let x = evensAndOdds(13)
console.log(x)  // d
let y = evensAndOdds(2)
console.log(y)  // 0