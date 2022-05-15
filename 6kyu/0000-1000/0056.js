// Where is my parent!?(cry)

function findChildren(dancingBrigade) {
	return dancingBrigade.toLowerCase()
                         .split('')
                         .sort()
                         .join('')
                         .replace(/([a-z])\1+/g, a => a[0].toUpperCase() + a.slice(1).toLowerCase());
}

// Test
let x = findChildren('beeeEBb')
console.log(x) // 'BbbEeee'