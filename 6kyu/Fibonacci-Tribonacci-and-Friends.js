function Xbonacci(signature,n){
    let arr = []
    
    for(let i = 0; i < n; i++) {
      if(i < signature.length) {
        arr.push(signature[i])
      }else{
        let sliceRed = arr.slice(-signature.length).reduce((acc, c) => acc + c, 0)
        arr.push(sliceRed)
      }
    }
  
    return arr 
}