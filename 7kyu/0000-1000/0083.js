// Rock Paper Scissors Lizard Spock

function rpsls(pl1, pl2){
    if (pl1 === pl2) return 'Draw!'
    return {
        'rock'      : ['paper', 'spock'], 
        'paper'     : ['scissors', 'lizard'],
        'scissors'  : ['spock', 'rock'],
        'lizard'    : ['scissors', 'rock'],
        'spock'     : ['lizard', 'paper'],
    }[pl1].includes(pl2) ? 'Player 2 Won!' : 'Player 1 Won!'
}

// Test
let x = rpsls('paper', 'scissors')
console.log(x) // 'Player 1 Won!'