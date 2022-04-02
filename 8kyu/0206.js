// Regexp Basics - is it a digit?

String.prototype.digit = function() {
    return /^[0-9]$/.test(this);
};