// Geometry Basics: Distance between points in 2D

function distanceBetweenPoints(a, b) {
    return Math.sqrt( (a.x - b.x)**2 + (a.y - b.y)**2 )
}