// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
    return this.split("").map( c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()).join("")
}