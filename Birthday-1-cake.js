function cake(x, y) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let sum = 0
    
    for(let i = 0; i < y.length; i++) {
      if(i % 2 === 0) {
        sum += y[i].charCodeAt()
      } else {
        sum+= (alphabet.indexOf(y[i]) + 1)
      }
    }
    
    let sumPercentage = sum / x * 100
    
    return sumPercentage > 70 ? 'Fire!' : 'That was close!'
}