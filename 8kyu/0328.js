// Decibel Scale

let dBScale = i => 10 * Math.log(i / Math.pow(10, -12)) / Math.log(10)