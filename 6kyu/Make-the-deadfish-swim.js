function parse( data ) {
    let value = 0
    let arr = []
    
    for(let i = 0; i < data.length; i++){
      if(data.charAt(i) === 'i') {
        value = value + 1
      } else if(data.charAt(i) === 'd') {
        value = value - 1
      } else if(data.charAt(i) === 's') {
        value = Math.pow(value, 2)
      } else if(data.charAt(i) === 'o') {
        arr.push(value)
      }
    }
    
    return arr
}