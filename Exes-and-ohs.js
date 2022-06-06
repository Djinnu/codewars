//My solution:
function XO(str) {
    let xCount = 0
    let oCount = 0
    for(let i = 0; i < str.length; i++) {
      if (str.charAt(i).toLowerCase() === 'x') {
        xCount++
      } else if (str.charAt(i).toLowerCase() === 'o') {
        oCount++
      }
    }
    return xCount === oCount
}

//better solution: 
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}