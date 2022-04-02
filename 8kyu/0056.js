// Define a card suit

function defineSuit(card) {
    return {
      '♣': 'clubs',
      '♦': 'diamonds',
      '♥': 'hearts',
      '♠': 'spades'
    }[card[card.length - 1]]
}