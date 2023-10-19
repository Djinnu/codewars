function pairs(ar){
    let arr = []
    let count = 0
    
    for(let i = 0; i < ar.length; i+=2) {
      arr.push([ar[i], ar[i+1]])
    }
    
    arr.forEach(x => {
      if(x[0] + 1 === x[1]) {
        count++
      } else if(x[0] - 1 === x[1]) {
        count++
      }
    })
    
    return count
};