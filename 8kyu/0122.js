// I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
    return {
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly",
      0: "not at all"
    }[nbPetals % 6]
}