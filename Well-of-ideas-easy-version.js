function well(x){
    let goodIdeasCount = 0
    x.forEach(x => {
      if(x === "good") {
        goodIdeasCount ++
      }
    })
    
    return goodIdeasCount > 2 ? "I smell a series!" : goodIdeasCount > 0 ? "Publish!" : "Fail!"
}