// Total amount of points

function points(games) {
    return games.reduce( (sum, game) => Number(game[0]) > Number(game[2]) ? sum += 3 
                                      : Number(game[0]) < Number(game[2]) ? sum += 0 : sum += 1, 0)
}