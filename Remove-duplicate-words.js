function removeDuplicateWords (s) {
    let strArr = s.split(" ")
    let newArr = []
    
    for(let i = 0; i < strArr.length; i++) {
      if(!newArr.includes(strArr[i])) {
        newArr.push(strArr[i])
      }
    }
    
    return newArr.join(" ")
}