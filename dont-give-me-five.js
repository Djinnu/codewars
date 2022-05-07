function dontGiveMeFive(start, end){
    let resArr = [];
    for (let i = start; i <= end; i++) {
      if (!i.toString().includes('5')) {
        resArr.push(i)
      } 
    }
    return resArr.length;
}