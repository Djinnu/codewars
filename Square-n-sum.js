//my solution:
function squareSum(numbers){
    return numbers.map(x => x*x).reduce((acc, c) => acc + c, 0)
}

//another option: return numbers.reduce((sum,num) => sum + (num * num), 0);