// Generate range of integers

function generateRange(min, max, step){
    return Array.from(new Array(Math.ceil(0.01 + (max - min) / step)), (_, i) => min + step * i)
}