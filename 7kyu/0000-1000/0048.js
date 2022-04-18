// Harvest Festival

function plant(seed, water, fert, temp){
    return temp <= 30 && temp >= 20 ? ("-".repeat(water) + seed.repeat(fert)).repeat(water) : ("-".repeat(water)).repeat(water) + seed
}

// Test
let x = plant("@", 3, 3, 40)
console.log(x) // "---@@@---@@@---@@@"