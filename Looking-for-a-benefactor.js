function newAvg(arr, newavg) {
    let red = arr.reduce((acc, c) => acc + c, 0)
    let length = arr.length
    let oldAvg = Math.ceil(red/length)
    
    if(newavg < oldAvg) {
      throw Error("Expected New Average is too low")
    }
  
    return Math.ceil(newavg * (length + 1)  - red) 
}