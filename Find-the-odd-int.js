function findOdd(A) {
    let result
    let resObj = A.reduce(function(obj, num) {
      obj[num] = ++obj[num] || 1
      return obj
    }, {})
    
    for (const property in resObj) {
      if(resObj[property] % 2 !== 0) {
        result = property
      }
    }
    
    return Number(result)
}