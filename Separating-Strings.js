function sepStr(str) {
    let strArr = str.split(' ')
    let endCon = Math.max(...strArr.map(x => x.length))
    let result = []
    for(let i = 0; i < endCon; i++) {
      result.push(strArr.map(x => x[i] ? x[i] : ''))
    }
    return result
}