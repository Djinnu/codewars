function partlist(arr) {
    let arrToModify = [...arr]
    let firstArr = []
    let output = []
    
    for(let i = 0; i < arr.length -1; i++) {
      let value = arrToModify.shift()
      firstArr.push(value)
      output.push([firstArr.join(" "), arrToModify.join(" ")])
    }
   
    return output
}