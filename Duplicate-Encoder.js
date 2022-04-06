function duplicateEncode(word){
    const newArr = [];
    const wordArr = word.toLowerCase().split("");
    for (let i = 0; i < wordArr.length; i++) {
        if(wordArr.indexOf(wordArr[i]) !== wordArr.lastIndexOf(wordArr[i])) {
            newArr.push(")")
        } else {
            newArr.push("(")
        }
    }   
    return newArr.join('')
}