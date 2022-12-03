//my first solution:
function howMuchILoveYou(nbPetals) {
    if(nbPetals % 6 === 1) return "I love you"
    if(nbPetals % 6 === 2) return "a little"
    if(nbPetals % 6 === 3) return "a lot"
    if(nbPetals % 6 === 4) return "passionately"
    if(nbPetals % 6 === 5) return "madly"
    if(nbPetals % 6 === 0) return "not at all"
}
//better option:
function howMuchILoveYou(nbPetals) {
    let phrase = {    
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
    }
    return phrase[nbPetals%6]
}
