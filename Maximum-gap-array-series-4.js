function maxGap (numbers){
    let maxDif = 0
    let arr = numbers.sort((a, b) => a - b)
    
    for(let i = 0; i < arr.length; i++) {
      let difference = arr[i+1] - arr[i]
      
      if(difference > maxDif) {
        maxDif = difference
      }
    }
    
    return maxDif
}