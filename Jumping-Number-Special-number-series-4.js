function jumpingNumber(n){
    let arr = n.toString().split('').map(x => Number(x))
    
    while(arr.length > 1) {
      let difference = Math.abs(arr[1] - arr[0])
      if(difference !== 1) {
        return "Not!!"
      }
      arr.shift()
    }
    
    return "Jumping!!"
}