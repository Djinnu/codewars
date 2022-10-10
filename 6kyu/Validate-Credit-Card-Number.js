//my solution:
function validate(n) {
    let nArr = n.toString().split('')
    let mapArr
    
    if (nArr.length % 2 === 0) {
      mapArr = nArr.map((x, i) => {
        if(i % 2 === 0) {
          if(x * 2 > 9) {
            return x = x * 2 - 9
          } else {
            return x = x * 2
          }
        } else {
          return x
        }
      })
    } else {
      mapArr = nArr.map((x, i) => {
        if(i % 2 !== 0) {
          if(x * 2 > 9) {
            return x = x * 2 - 9
          } else {
            return x = x * 2
          }
        } else {
          return x
        }
      })
    }
    
    let sum = mapArr.reduce((acc, c) => acc + Number(c), 0)     
    
    return sum % 10 === 0
}


//another good one i found: 
function validate(n) {
    n = n.toString().split('').map(Number).reverse();
    return n.reduce(function (sum, digit, index) {
      if (index & 1) digit <<= 1;
      if (digit > 9) digit -= 9;
      return sum + digit;
    }, 0) % 10 == 0;
}