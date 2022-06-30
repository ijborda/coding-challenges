// Street Fighter 2 - Character Selection

function streetFighterSelection(fighters, pos, moves){
  let route = [];
  moves.forEach(move => {
    if (move === 'up') {
      pos[0] -= 1;
    } else if (move === 'down') {
      pos[0] += 1;
    } else if (move === 'right') {
      pos[1] += 1;
    } else {
      pos[1] -= 1;
    }
    if (pos[0] > 1) {
      pos[0] = 1;
    } else if (pos[0] < 0) {
      pos[0] = 0;
    } else if (pos[1] < 0) {
      pos[1] = 5;
    } else if (pos[1] > 5) {
      pos[1] = 0;
    }
    route.push(fighters[pos[0]][pos[1]]);
  })
  return route;
}

// Test
fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
moves = ['up', 'left', 'right', 'left', 'left'];
console.log(streetFighterSelection(fighters, [0,0], moves));
// 'Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']