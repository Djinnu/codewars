function arrayLeaders(numbers){
    return numbers.filter((x, i) => {
      let rightSideSum = numbers.slice(i+1).reduce((acc, c) => acc + c, 0)
      return x > rightSideSum
    });
}