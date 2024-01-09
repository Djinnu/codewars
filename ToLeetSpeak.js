function toLeetSpeak(str) {
    let obj = {
      A : '@',
      B : '8',
      C : '(',
      D : 'D',
      E : '3',
      F : 'F',
      G : '6',
      H : '#',
      I : '!',
      J : 'J',
      K : 'K',
      L : '1',
      M : 'M',
      N : 'N',
      O : '0',
      P : 'P',
      Q : 'Q',
      R : 'R',
      S : '$',
      T : '7',
      U : 'U',
      V : 'V',
      W : 'W',
      X : 'X',
      Y : 'Y',
      Z : '2'
    }
    
    let newStr = ''
    
    for(let i = 0; i < str.length; i++) {
      if(str[i] === " ") {
        newStr+= " "
      } else { 
        newStr += obj[str[i]]
      }
    }
    
    return newStr;
}

