var palindromeChainLength = function(n) {
    let stepCount = 0
    let current = n.toString()
    let reverse = n.toString().split("").reverse().join("")
    
    while(current !== reverse) {
      current = (Number(current) + Number(reverse)).toString()
      reverse = current.split("").reverse().join("")
      stepCount++
    }
    
    return stepCount
};