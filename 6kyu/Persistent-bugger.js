//My first solution:
function persistence(num) {
    let count = 1
    const arr = num.toString().split('')
    let reducedArr = arr.reduce((acc, c) => acc * c)
    if(arr.length === 1) {
        return 0
    } else {
        while(reducedArr > 9) {
            reducedArr = reducedArr.toString().split('').reduce((acc, c) => acc * c)
            count++
        }
    }
    return count
}

//better solution: 
function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
}