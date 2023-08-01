function solution(digits){
    let digitsStr = digits.toString()
    let largest = 0
   
    for(let i = 0; i < digitsStr.length; i++) {
      let fiveNums = Number(digitsStr.slice(i, i+5))
      if(fiveNums > largest) {
        largest = fiveNums
      }
    }
    
    return largest
}