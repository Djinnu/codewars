function sumOfN(n) {
    let arr = []
    let sum = 0
    
    for(let i = 0; i <= Math.abs(n); i++) {
      if(n < 0) {
        sum-=i
        arr.push(sum)
      }else{
        sum+=i
        arr.push(sum)
      } 
    }
    
    return arr
};