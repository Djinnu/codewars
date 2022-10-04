//my first solution:
function thirt(n) {
    let repeatingSequence = [1, 10, 9, 12, 3, 4]
    let number = n.toString().split('').reverse()
    
    if(repeatingSequence.length < number.length) {
      repeatingSequence = repeatingSequence.concat(repeatingSequence)
    }
   
    let red = number.reduce((acc, c, i) => acc + Number(c) * repeatingSequence[i], 0)
   
    while(red > 99) {
      let newRed = red.toString().split('').reverse().reduce((acc, c, i) => acc + Number(c) * repeatingSequence[i], 0)
      red = newRed
    }
    
    return red
}

//a much better solution:
function thirt(n) {
    const nums = [1,10,9,12,3,4]
    var sum = (''+n).split('').reverse().reduce((sum,v,i) => sum + v * nums[i%nums.length], 0)
    return sum === n ? n : thirt(sum)
}