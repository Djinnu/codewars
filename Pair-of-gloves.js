function numberOfPairs(gloves) {
    let obj = {}
    let pairs = 0
    
    gloves.forEach(x => obj[x] ? obj[x] += 1 : obj[x] = 1)
    
    for(const key in obj) {
      if(obj[key] > 1) {
         pairs += Math.floor(obj[key] / 2)
      }
    }
   
    return pairs
}