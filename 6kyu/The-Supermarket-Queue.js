//my first solution:
function queueTime(customers, n) {
    if(customers.length === 0) {
      return 0
    } else if(n === 1) {
      return customers.reduce((acc, c) => acc + c, 0)
    }
    
    let newArr = customers.splice(0, n)
    
    while(customers.length) {
      newArr[newArr.indexOf(Math.min(...newArr))] = newArr[newArr.indexOf(Math.min(...newArr))] + customers[0]
      customers.shift()
    }
  
    return Math.max(...newArr)
}

//other option without while loop:
function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
    }
    return Math.max(...w);
}
