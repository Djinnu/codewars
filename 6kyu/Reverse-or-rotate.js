function revrot(str, sz) {
    if(sz <= 0 || !str || sz > str.length) {
      return ""
    } 
  
    let chuncks = []
    let strArr = str.split('')
    
    while(strArr.length >= sz) {
      let chunck = strArr.splice(0, sz)
      let chunckReduce = chunck.reduce((acc, c) => acc + Math.pow(c, 3), 0)
      
      if( chunckReduce % 2 === 0) {
        chunck = chunck.reverse()
      } else {
        let rotateLeft = chunck.shift()
        chunck.push(rotateLeft)
      }
      chuncks.push(chunck)
    }
    
    
    return chuncks.flat().join('')
}