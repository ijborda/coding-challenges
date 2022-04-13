// Do something "n.times" (Simplifying "for" loops)

Number.prototype.times = function (f) {
    for (let j = 0; j < this; j++) {
       f(j)
    }
}