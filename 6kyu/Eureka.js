function sumDigPow(a, b) {
    let arr = []
  
    for(let i = a; i <= b; i++) {
      let mapRed = i.toString().split('').map((x, index) => Math.pow(x, index + 1)).reduce((acc, c) => acc + c , 0)
      if(mapRed === i) {
        arr.push(i)
      }
    }
    return arr
}