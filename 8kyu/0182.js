// Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
    return sperm[1] === "X" ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son."
}