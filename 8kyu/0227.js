// Freudian translator

function toFreud(string) {
    return string.split(" ").filter(a => a).fill("sex").join(" ");
}