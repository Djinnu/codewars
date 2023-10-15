function balancedNum(number) {
    const strNumber = number.toString()
    const lengthOfStr = strNumber.length
    
    if(lengthOfStr < 3) return "Balanced"
    
    let leftSide = 0
    let rightSide = 0
    
    for(let i = 0; i < lengthOfStr; i++) {
      if(lengthOfStr % 2 === 0) {
        if(i < lengthOfStr / 2 - 1){
          leftSide += Number(strNumber[i])
        } else if (i > lengthOfStr/2) {
          rightSide += Number(strNumber[i])
        }
      } else {
        if(i < lengthOfStr/2 - 1) {
          leftSide += Number(strNumber[i])
        } else if(i > lengthOfStr/2) {
          rightSide += Number(strNumber[i])
        }
      }
    }
    
    return leftSide === rightSide ? "Balanced" : "Not Balanced"
}