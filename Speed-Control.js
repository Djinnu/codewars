function gps(s, x) {
    let sectionArr = []
    if(x.length <= 1) {
      return 0
    } else {
      for(let i = 0; i < x.length - 1; i++) {
        sectionArr.push(Math.abs(x[i] - x[i+1]))
      }
    }
    let avgArr = sectionArr.map(x => 3600 * x / s)
    return Math.floor(Math.max(...avgArr))
}