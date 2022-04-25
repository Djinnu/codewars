//my first try:

function digitize(n) {
    let numArr = []
    n.toString().split('').reverse().forEach(x => numArr.push(Number(x)))
    return numArr
  }

//a better solution: return String(n).split('').map(Number).reverse()