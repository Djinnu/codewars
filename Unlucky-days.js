function unluckyDays(year){
    let data = new Date()
    data.setDate(13)
    data.setFullYear(year)
    let count = 0
    
    for(let i = 0; i < 12; i++) {
      data.setMonth(i)
      if(data.getDay() === 5) count += 1
    }
    
    return count
}