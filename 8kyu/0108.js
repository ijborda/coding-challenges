// Will there be enough space?

function enough(cap, on, wait) {
    return Math.abs(Math.min( 0, cap - (on + wait) ))
}