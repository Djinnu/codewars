//my first solution:
function sortArray(array) {
    let oddArr = array.filter(x => x % 2 !== 0).sort((a,b) => a - b)
    return array.map(x => {
      if(x % 2 !== 0) {
        x = oddArr[0]
        oddArr.shift()
        return x
      } else {
        return x
      }
    })
}
//a more compact one:
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}