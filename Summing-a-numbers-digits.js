function sumDigits(number) {
    let str = Math.abs(number).toString()
    let sum = 0
    
    for(let i = 0; i < str.length; i++) {
      sum += +str[i]
    }
    
    return sum
}
  