function solve(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let vowels = 'aeiou'.split('')
    let sArr = s.split('')
    let subArrValue = 0
    let maxSubArrValue = 0
     
    for(let i = 0; i < sArr.length; i++) {
      if(!vowels.includes(sArr[i])) {
        subArrValue += alphabet.indexOf(sArr[i]) + 1
        subArrValue > maxSubArrValue ? maxSubArrValue = subArrValue : maxSubArrValue = maxSubArrValue
      } else {
        subArrValue = 0
      }
    }
    
    return maxSubArrValue
};