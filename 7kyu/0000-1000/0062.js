// Categorize New Member

function openOrSenior(data){
    return data.map( a => a[0] >= 55 & a[1] > 7 ? 'Senior' : 'Open')
}

// Test
let x = openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])
console.log(x) //['Open', 'Senior', 'Open', 'Senior']
