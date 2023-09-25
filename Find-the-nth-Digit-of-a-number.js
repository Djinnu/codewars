var findDigit = function(num, nth){
    let reverseArr = Math.abs(num).toString().split('').reverse()
    if(nth <= 0) return -1
    
    return Number(reverseArr.find((x, i) => i+1 === nth)) || 0
}