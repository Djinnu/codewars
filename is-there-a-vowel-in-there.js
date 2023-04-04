function isVow(a){
    let vowelsCode = [97, 101, 105, 111, 117]
    return a.map(x => {
      if(vowelsCode.includes(x)) {
        return String.fromCharCode(x)   
      } else {
        return x
      }
    })
}

//better option:
const isVow = a =>{
    let map = {
      97: 'a',
      101: 'e',
      105: 'i',
      111: 'o',
      117: 'u',
    }
    return a.map( num => map[num] ? map[num] : num);
}