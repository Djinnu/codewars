function wordsToMarks(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let value = 0
    
    for(let i = 0; i < string.length; i++) {
      value += (alphabet.indexOf(string[i]) + 1)
      
    }
   
    return value
}