//my solution:
function sqInRect(lng, wdth){
    let max = Math.max(...arguments)
    let min = Math.min(...arguments)
    let result = []
    let area = lng * wdth
  
    while(area > 0) {
      result.push(min)
      area = area - Math.pow(min, 2)
      if(area < Math.pow(min, 2)) {
        min = max % min
        max = result[result.length-1]
      }
    }
     
    
    return lng === wdth ? null : result
}



//a more clever and easier solution:
function sqInRect(lng, wdth){
    let arr = []
    if(lng === wdth) return null
    while(lng > 0 && wdth > 0){
      arr.push(lng > wdth ? wdth : lng)
      lng > wdth ? lng -= wdth : wdth -= lng
    }
    return arr
}