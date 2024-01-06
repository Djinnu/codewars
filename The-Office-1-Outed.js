function outed(meet, boss){
    let happinessRating = 0
    let numberOfPpl = Object.keys(meet).length
    
    for(const key in meet) {
      if(key === boss) {
        happinessRating += meet[key] * 2
      } else {
        happinessRating += meet[key]
      }
    }
    
    return happinessRating / numberOfPpl  <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'  
}