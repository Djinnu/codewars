function points(games) {
    let points = 0
    
    games.forEach((x,i) => {
      if(Number(x[0]) > Number(x[2])) {
        points += 3
      } else if(Number(x[0]) === Number(x[2])) {
        points += 1
      } 
    })
    
    return points
}