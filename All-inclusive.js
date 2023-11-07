//my solution:
function containAllRots(strng, arr) {
    if(!strng || !arr) return true
    
    let strArr = [strng]
    let newStr = strng
    
    for(let i = 0; i < strng.length -1; i++) {
      let newStrArr = newStr.split('')
      let lastLetter = newStrArr.pop()
      newStrArr.unshift(lastLetter)
      newStr = newStrArr.join('')
      strArr.push(newStr)
    }
    
    return strArr.every(x => arr.includes(x))
}

//better option:
function containAllRots(str, arr) {
    for (var i = 0; i < str.length; i++) {
      if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
        return false
      }
    }
    return true
}