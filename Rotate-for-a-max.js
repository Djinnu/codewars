function maxRot(n) {
    let str = n.toString()
    let arr = [n]
    let subStr = ''
    let newStr = str.slice()
   
    for(let i = 1; i < str.length; i++) {
      newStr = newStr.slice(1) + newStr.slice(0, 1)
      subStr += newStr[0]
      newStr = newStr.slice(1)
      let modifiedStr = subStr + newStr
      arr.push(Number(modifiedStr))
    }
    
    
    return Math.max(...arr)
}