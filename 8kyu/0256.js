// What's up next?

function nextItem(xs, item) {
    let found = false
    for (let a of xs) {
      if (found) return a
      if (a == item) found = true
    }
    return undefined
}