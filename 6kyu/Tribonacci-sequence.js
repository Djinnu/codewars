function tribonacci(signature,n){
    let arr = signature.slice()
    
    for(let i = 3; i < n; i++) {
      arr.push(arr.slice(i-3, i).reduce((acc, c) => acc + c, 0))
    }
    
    return n > 2 ? arr : arr.slice(0, n)
}