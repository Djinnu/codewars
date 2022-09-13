function goodVsEvil(good, evil){
    let goodArr = good.split(' ')
    let evilArr = evil.split(' ')
    const goodWorth = [1, 2, 3, 3, 4, 10]
    const evilWorth = [1, 2, 2, 2, 3, 5, 10]
   
    const goodScore = goodArr.reduce((acc, c, i) => acc + Number(c) * goodWorth[i], 0)
    const evilScore = evilArr.reduce((acc, c, i) => acc + Number(c) * evilWorth[i], 0)
    
    if(goodScore > evilScore) {
      return 'Battle Result: Good triumphs over Evil'
    } else if(goodScore < evilScore) {
      return 'Battle Result: Evil eradicates all trace of Good'
    } else {
      return 'Battle Result: No victor on this battle field'
    }
}