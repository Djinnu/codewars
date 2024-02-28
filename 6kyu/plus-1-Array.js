function upArray(arr){
    let newArr = arr.slice()
    let outputArr = []
    newArr[newArr.length-1] = newArr[newArr.length-1] + 1
    
    for(let i = arr.length - 1; i >= 0; i--) {
      if(arr[i] < 0 || arr[i] >= 10) {
        return null
      } else if (newArr[i] === 10) {
        outputArr.unshift(0)
        newArr[i-1] = newArr[i-1] + 1
        if(!newArr[i-1]) {
          outputArr.unshift(1)
        }
      } else {
        outputArr.unshift(newArr[i])
      }
    }
    
    return outputArr.length ? outputArr : null
}