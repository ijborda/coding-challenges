// Points of Reflection

function symmetricPoint([px, py], [qx, qy]) {
    let xdir = px < qx ? Math.abs(px - qx) : - Math.abs(px - qx)
    let ydir = py < qy ? Math.abs(py - qy) : - Math.abs(py - qy)
    return [qx + xdir, qy + ydir]
}