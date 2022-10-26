//clever option i found:
function dashatize(num) {
    return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
};

//another more DRY option: 
function dashatize(num) {
    return num = num.toString().split("").map(function(c){
      return c % 2 ? "-" + c + "-" :  c ;
    }).join("").split("-").filter(a => a != "").join("-");
    
};

//my first solution:
function dashatize(num) {
    if(isNaN(num)) {
     return 'NaN'
    }
    
    let newNum = Math.abs(num)
    let arr = newNum.toString().split("")
    
    if(arr.length === 1) {
      return arr[0]
    }
  
    let map = arr.map((x,i) => {
      if(x % 2 !== 0) {
        if(i === 0) {
          return x + "-"
        } else if(i === arr.length-1) {
          return "-" + x
        } else {
          return "-" + x + "-"
        }
      } else {
        return x
      }
    }).join('')
    const regex = /--/g
    return map.replace(regex, "-")
}