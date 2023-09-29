function addLetters(...letters) {
    if(!arguments.length) return "z"
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
    let index = 0
    letters.forEach(x => index += alphabet.indexOf(x)+1)
    return index >= 25 ? alphabet[(index - 1) % 26] : alphabet[index - 1]
}