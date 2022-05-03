// Kooka-Counter

var kookaCounter = function(laughing) {
    return laughing.replace(/(ha)+/g, 'f').replace(/(Ha)+/g, 'm').length
}

// Test
let x = kookaCounter("HaHaHahahaHaHa")
console.log(x) // 3