function foldTo(distance) {
    if(distance < 0) return null
    let thickness = 0.0001
    let count = 0
    while(thickness < distance) {
      thickness = 2 * thickness
      count++
    }
    
    return count
}