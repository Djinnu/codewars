function countDevelopers(list) {
    let count = 0
    
    list.forEach(x => {
      if(x.continent === "Europe" && x.language === "JavaScript") {
        count++
      }
    })
    
    return count
}