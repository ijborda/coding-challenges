// How many stairs will Suzuki climb in 20 years?

function stairsIn20(s){
    return 20 * s.reduce( (sum, a) => sum + a.reduce( (sum2, a2) => sum2 + a2, 0 ), 0)
}