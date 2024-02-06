function longestRepetition(s) {
    let output = ['', 0]
    let count = 1
    let sLength = s.length
   
    for(let i = 0; i < sLength; i++) {
      if(s[i] === s[i+1]) {
        count++
        if(count > output[1]) {
          output = [s[i], count]
        }
      } else {
        count = 1
        output[0] === '' ? output = [s[i], 1] : ''
      }
    }
    
    return output
}