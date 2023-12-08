function squares(x, n) {
    let arr = [x]
    let num = x
    
    for(let i = 2; i <=n; i++) {
      num = Math.pow(num, 2)
      arr.push(num)
    }
    
    return  n <= 0 ? [] : arr
}