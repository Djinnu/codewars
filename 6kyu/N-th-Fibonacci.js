//my solution:
function nthFibo(n) {
    if(n === 1) {
      return 0
    } else if(n === 2) {
      return 1
    }
    
    let fib1 = 0
    let fib2 = 1
    let fibNum
    
    for(let i = 3; i<=n; i++) {
      fibNum = fib1 + fib2
      fib1 = fib2
      fib2 = fibNum
    }
    
    return fibNum
}

//better solution:
function nthFibo(n) {
    let [prev, curr] = [0, 1];
    for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
    return prev;
}