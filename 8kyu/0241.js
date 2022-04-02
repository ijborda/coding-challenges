// Thinkful - Number Drills: Blue and red marbles

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let blueNow = blueStart - bluePulled
    let redNow = redStart - redPulled
    return  blueNow / (blueNow + redNow)
}