// Write a generic function chainer

function chain(input, fs) {
    return fs.reduce( (ans, fx) => fx(ans), input )
}

// Test
function add(x) {
	return x + 10;	
}
function mult(x) {
	return x * 30;
}
let x = chain(2, [add, mult]);
console.log(x)