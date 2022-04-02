// Find the Slope

function slope([x1, y1, x2, y2]) {
    return x1 - x2 === 0 ? 'undefined' : String((y1 - y2) / (x1 - x2))
}