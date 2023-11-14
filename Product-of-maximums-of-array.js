//my solution:
function maxProduct(numbers, size){
    let sum = 1
    
    for(let i = 1; i <= size; i++) {
      let max = Math.max(...numbers)
      sum *= max
      let index = numbers.indexOf(max)
      numbers.splice(index, 1)
    }
    
    return sum
}

//better one:
function maxProduct(numbers, size){
    return numbers.sort((a,b) => b-a).slice(0,size).reduce((acc,n) => acc*n);
}