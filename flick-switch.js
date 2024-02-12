function flickSwitch(arr){
    let flick = true
    
    return arr.map(x => {
      if(x === 'flick') {
        flick = !flick
      }
      return flick
    })
}