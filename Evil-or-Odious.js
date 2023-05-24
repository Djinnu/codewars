function evil(n) {
    let str = (n >>> 0).toString(2)
    let numberCount = 0
    
    for(let i = 0; i < str.length; i++) {
      if(str[i] === "1") {
        numberCount += 1
      }
    }
  
    return numberCount % 2 !== 0 ? "It's Odious!" : "It's Evil!"
}