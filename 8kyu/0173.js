// Grasshopper - Terminal game combat function

function combat(health, damage) {
    return Math.max(health - damage, 0)
}