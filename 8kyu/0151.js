// A wolf in sheep's clothing

function warnTheSheep(queue) {
    return queue.indexOf("wolf") <= queue.length - 2 ? 
      `Oi! Sheep number ${queue.length - queue.indexOf("wolf") - 1}! You are about to be eaten by a wolf!` :
      'Pls go away and stop eating my sheep'
}