function solution(number){
    let numArr = []
    for(let i = 1; i < number; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        numArr.push(i)
      } else if (i % 3 === 0) {
        numArr.push(i)
      } else if (i % 5 === 0) {
        numArr.push(i)
      }
    }
  
    return numArr.reduce((acc, c) => acc + c, 0)
  }