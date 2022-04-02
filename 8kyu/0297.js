// Training JS #11: loop statement --break,continue

function grabDoll(dolls){
    var bag=[];
    for (let doll of dolls) {
      if (doll === "Hello Kitty" || doll === "Barbie doll") {
        bag.push(doll)
      }
      if (bag.length === 3) {
        break
      }
      else {
        continue
      }
    }
    return bag;
}