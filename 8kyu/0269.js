// UEFA EURO 2016

function uefaEuro2016(teams, scores){
    return `At match ${teams.join(' - ')}, ${scores[0] === scores[1] ? 'teams played draw.' : 
        scores[0]  >  scores[1] ? teams[0] + ' won!' : teams[1] + ' won!'}`
}