// Pete, the baker

function cakes(recipe, available) {
    let cake = 0
    let ingredients = Object.keys(recipe)
    do {
      for (let ing of ingredients) {
        available[ing] = available[ing] - recipe[ing] >= 0 ? available[ing] - recipe[ing] : -1
        if (available[ing] < 0) {
          return cake
        }
      }
      cake++
    } while (true)
}