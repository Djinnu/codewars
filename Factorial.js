function factorial(n) {
    if(n < 0 || n > 12) {
      throw new RangeError()
    } else if (n === 0) {
      return 1
    }
    
    let sum = 1
    for(let i = 1; i <= n; i++) {
      sum *= i 
    }
    
    return sum
}