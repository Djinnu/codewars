function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let count = 0
    let height = 0
    
    while(desiredHeight > height) {
      height += upSpeed
      count++
      if(height >= desiredHeight) break
      height -= downSpeed
    }
    
    return count
}