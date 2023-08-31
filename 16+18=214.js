function add(num1, num2) {
    let num1Str = num1.toString()
    let num2Str = num2.toString()
    let sum = []
    let addedNumbers
    let countForLoop = Math.max(num1Str.length, num2Str.length)
    
    for(let i = 1; i <= countForLoop; i++) {
      if(Number(num1Str[num1Str.length-i]) && Number(num2Str[num2Str.length-i])) {
        addedNumbers = Number(num1Str[num1Str.length-i]) + Number(num2Str[num2Str.length-i])
        sum.unshift(addedNumbers)  
      } else if(Number(num1Str[num1Str.length-i])) {
        sum.unshift(Number(num1Str[num1Str.length-i]))
      } else {
        sum.unshift(Number(num2Str[num2Str.length-i]))
      }
    }
    
    return Number(sum.join(""))
}