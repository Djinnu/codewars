function presses(phrase) {
    let lowerCase = phrase.toLowerCase().split('')
    let arr = ['1', 'abc2', 'def3', 'ghi4', 'jkl5', 'mno6', 'pqrs7', 'tuv8', 'wxyz9', ' 0']
    let keyPresses = 0
    
    for(let i = 0; i < lowerCase.length; i++) {
      for(let j = 0; j < arr.length; j++) {
        if(arr[j].includes(lowerCase[i])) {
          keyPresses += arr[j].indexOf(lowerCase[i]) + 1
        }
      }
    }
    
    return keyPresses
}