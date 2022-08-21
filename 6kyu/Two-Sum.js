//my solution:
function twoSum(numbers, target) {
    let arr = []
    numbers.forEach((x,i) => {
      for(let j = 0; j < numbers.length; j++) {
        if(x+numbers[j] === target && j !== i) {
          arr.push(i,j)
        }
      }
    })
    return arr.splice(0, 2)
}

//better option:
function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}