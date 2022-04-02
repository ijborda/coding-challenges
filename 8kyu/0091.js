// Contamination #1 -String-

function contamination(text, char){
    if (text.length === 0 || char.length === 0) return ""
    return text.split("").fill(char).join("")
}