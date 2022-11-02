function calc(expr) {
    let arr = expr.split(' ')
    let result = []
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === "*") {
        result.push(result.pop() * result.pop())
      } else if(arr[i] === "/") {
        result.push(result.shift() / result.pop())
      } else if(arr[i] === "+") {
        result.push(result.pop() + result.pop())
      } else if(arr[i] === "-") {
        result.push(result.shift() - result.pop())
      } else {
        result.push(Number(arr[i]))
      }
    }
    
    return result.length ? result.pop() : 0
}