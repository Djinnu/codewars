//My solution:
function towerBuilder(nFloors) {
    let str = "*"
    let arr = [str]
    let count = 1
    
    
    while(count < nFloors) {
      str+= "**"
      arr.push(str)
      arr = arr.map((x,i,arr) => {
        let lastElementLength = arr[arr.length-1].length
        return x.padStart(lastElementLength-1).padEnd(lastElementLength)
      })
      count++
    }
    
    return arr
}
//solution i liked:
function towerBuilder(nFloors) {
    var result = [];
    var starNumber = 1;
    for (i=1; i<=nFloors; i++) {
      result[i-1] = " ".repeat(nFloors-i) + "*".repeat(starNumber) + " ".repeat(nFloors-i);
      starNumber += 2;
    }
    return result;
}
