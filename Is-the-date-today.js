function isToday(date) {
    let todaysDate = new Date()
    let year = todaysDate.getYear()
    let month = todaysDate.getMonth()
    let day = todaysDate.getDate()
    
    if(year === date.getYear()) {
      if(month === date.getMonth()) {
        if(day === date.getDate()) {
          return true
        }
      }
    }
    return false
}