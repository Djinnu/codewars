function vowelIndices(word){
    let vowelsIndx = []
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    for(let i = 0; i < word.length; i++) {
      for(let j = 0; j < vowels.length; j++) {
        if(word[i].toLowerCase() === vowels[j]) {
          vowelsIndx.push(i+1)
        }
      }
    }
    return vowelsIndx;
  }