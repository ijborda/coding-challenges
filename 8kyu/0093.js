// Potenciation

function power(x,y){
    return Array.from( new Array(y), () => x).reduce( (a,b) => a*b , 1)
}