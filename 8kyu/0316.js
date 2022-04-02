// Localize The Barycenter of a Triangle

function barTriang([xa, ya], [xb, yb], [xc, yc]){
    return [ +((xa + xb + xc)/3).toFixed(4), +((ya + yb + yc)/3).toFixed(4) ]
}