function myLanguages(results) {
    let arr = []
    
    for(const [key, value] of Object.entries(results)) {
      if(value >= 60) {
        arr.push([key,value])
      }
    }
    
    return arr.sort((a, b) => b[1] - a[1]).map(x => x[0])
}