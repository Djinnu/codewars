function combine() {
    let newObj = {}
    let arr = Array.from(arguments)
    
    arr.forEach(x => {
      for(const key in x) {
        newObj[key] ? newObj[key] += x[key] : newObj[key] = x[key]
      }
    })
    
    return newObj
}