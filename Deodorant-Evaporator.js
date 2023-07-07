function evaporator(content, evap_per_day, threshold){ 
    let daysCount = 0
    let max = 100
    
    while(max > threshold) {
      max -= (evap_per_day / 100) * max
      daysCount++
    }
    
    return daysCount
}