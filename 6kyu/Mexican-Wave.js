function wave(str) {
    let result = []
    
    for(let i = 0; i < str.length; i++) {
      if(str[i] === " ") {
        continue
      } else {
        result.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1))
      }
    }
  
    return result
}