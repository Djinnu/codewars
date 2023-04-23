function padIt(str,n){
    let num = 1
    let newStr = str
    
    while(num <= n) {
      if(num % 2 !== 0) {
        newStr = '*' + newStr
      } else {
        newStr = newStr + '*'
      }
      num++
    }
   
    return newStr
}