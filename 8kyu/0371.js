// Simple Fun #261: Whose Move

function whoseMove(lastPlayer, win) {
    return win ? lastPlayer : 
           lastPlayer === 'black' ? 'white' : 'black'
}