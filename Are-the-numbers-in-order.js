function inAscOrder(arr) {
    let str = arr.join("")
    let str2 = arr.sort((a,b) => a - b).join("")
  
    return str === str2
}