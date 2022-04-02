// Character Frequency

function charFreq(message) {
    return message
      .split("")
      .reduce( (freq, a) => {
        a in freq ? freq[a] += 1 : freq[a] = 1
        return freq
        }, {} )
}