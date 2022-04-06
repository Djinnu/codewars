function insertDash(num) {
    let numArr = num.toString().split('')
    let str = ''
    for (let i = 0; i < numArr.length; i++) {
      if(i > 0 && numArr[i-1] % 2 !== 0 && numArr[i] % 2 !== 0) {
        str += '-'
      }
      str += numArr[i]
    }
    return str
  }
  