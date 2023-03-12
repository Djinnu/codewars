function sumMul(n,m){
    let sum = 0
    
    for(let i = n; i < m; i+=n) {
      sum += i
    }
    
    return m > n ? sum : "INVALID"
}