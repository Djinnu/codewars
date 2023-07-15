function isPowerOfTwo(n){
    if(n === 1) return true
    
    let newN = n % 2 === 0 ? n : false
    
    while(newN >= 1) {
      if(newN % 2 === 0) {
        newN = newN / 2
      } else {
        break
      }
    }
    
    return newN === 1
}