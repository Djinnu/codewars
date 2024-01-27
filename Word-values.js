function wordValue(a) {
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    
    return a.map((x,i) => {
      let sum = 0
      x.split('').forEach(letter => sum += (alphabet.indexOf(letter)+1))
      
      return sum * (i+1)
    })
}