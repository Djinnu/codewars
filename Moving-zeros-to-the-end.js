//My first solution:
function moveZeros(arr) {
    let filteredArr = arr.filter(x => x !== 0)
    let stoppingCon = arr.length - filteredArr.length
    for(let i = 0; i < stoppingCon; i++) {
      filteredArr.push(0)
    }
    return filteredArr
}
//Better solution:
//return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
