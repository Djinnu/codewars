function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let count = 0
    let savings = 0
    
    if(startPriceOld >= startPriceNew) {
      return [count, Math.floor(startPriceOld-startPriceNew)]
    }
    
    while(savings + startPriceOld < startPriceNew) {    
      count++
      
      if(count % 2 === 0) {
        percentLossByMonth += 0.5
      } 
      
      startPriceOld -= (percentLossByMonth /100 * startPriceOld)
      startPriceNew -= (percentLossByMonth /100 * startPriceNew)
      savings += savingperMonth
    }
  
    return [count, Math.round(savings + startPriceOld - startPriceNew)]  
}