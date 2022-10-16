//my solution:
function countBy(x, n) {
    let z = [];
  
    for(let i = x; z.length < n; i += x) {
      z.push(i)
    }
    
    return z;
}

//another option:
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
      z.push(x * i);
    }
    return z;
}