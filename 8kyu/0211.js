// Grader

function grader(score) {
    return score > 1.0 || score < 0.6 ? "F" :
           score >= 0.9 ? "A" :
           score >= 0.8 ? "B" :
           score >= 0.7 ? "C" : "D"
}