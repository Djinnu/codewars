var hotpo = function(n){
    let count = 0
     
    while(n > 1) {
      if(n % 2 === 0) {
        n = n / 2
        count++
      } else {
        n = 3 * n + 1
        count++
      }
    }
    return count
}