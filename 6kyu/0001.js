// Unique In Order

var uniqueInOrder=function(iterable){
    let iterableUnique = []
    
    for (let i = 0; i < iterable.length; i++) {
      if (iterableUnique[iterableUnique.length - 1] !== iterable[i]) {
        iterableUnique.push(iterable[i])
      }
    }
    
    return iterableUnique
}