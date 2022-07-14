// Pokemon Damage Calculator

function calculateDamage(yourType, opponentType, attack, defense){
  const matchup = {
    fire: [["water", "fire"], ["electric"], ["grass"]],
    water: [["grass", "electric", "water"], [], ["fire"]],
    electric: [["electric"], ["grass", "fire"], ["water"]],
    grass: [["fire", "grass"], ["electric"], ["water"]]
  }
  let effectiveness
  matchup[yourType].forEach((a, i) => {
    if (a.includes(opponentType)) {
      effectiveness = i === 0 ? 0.5 : i;
    }
  })
  console.log(attack, defense, attack / defense, effectiveness)
  return 50 * (attack / defense) * effectiveness;
}

// Test
// console.log(calculateDamage("fire", "water", 100, 100)) // 25)
// console.log(calculateDamage("grass", "water", 100, 100)) // 100)
// console.log(calculateDamage("electric", "fire", 100, 100)) // 50)
// console.log(calculateDamage("grass", "electric", 57, 19)) // 150)
// console.log(calculateDamage("grass", "water", 40, 40)) // 100)
// console.log(calculateDamage("grass", "fire", 35, 5)) // 175)
// console.log(calculateDamage("fire", "electric", 10, 2)) // 250)
// console.log(calculateDamage("water", "water", 27, 27)) // ;