// Is the string uppercase?

String.prototype.isUpperCase = function() {
    return this.split("").every( n => n.toUpperCase() === n)
}