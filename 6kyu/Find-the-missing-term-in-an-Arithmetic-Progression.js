var findMissing = function (list) {  
    let leap = Math.min(Math.abs(list[0]-list[1]), Math.abs(list[1]-list[2]))
    let sign = list[1] > list[0] ? 1 : -1
    let number = list[0]
    
    for(let i = 0; i < list.length; i++, number += leap*sign) {
      if(list[i] !== number) {
        return number
      }
    }
}