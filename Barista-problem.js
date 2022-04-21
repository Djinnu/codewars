function barista(coffees){
    let sortedArr = coffees.sort((a,b) => a - b)
    let waitTimeArr = sortedArr.map((x,i) => {
       return sortedArr.slice(0, i + 1).reduce((a, b) => a + b + 2)
    })
    if (waitTimeArr.length === 0) {
     return 0
    } else {
     return waitTimeArr.reduce((acc, c) => acc + c)
    }
}