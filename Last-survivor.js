function lastSurvivor(letters, coords) {
    let arr = letters.split("")
    
    while(coords.length) {
      arr = arr.filter((x, i) => i !== coords[0])
      coords.shift()
    }
    
    return arr.join('')
}