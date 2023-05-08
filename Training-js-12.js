//my first solution:
function giveMeFive(obj){
    let arr = []
    
    for(const key in obj) {
      if(key.length === 5 && obj[key].length === 5) {
        arr.push(key, obj[key])
      } else if (key.length === 5) {
        arr.push(key)
      } else if(obj[key].length === 5) {
        arr.push(obj[key])
      }
    }
    
    return arr
}

//better option:
function giveMeFive(obj){
    var five=[];
    for (var key in obj) {
      if (key.length==5) five.push(key);
      if (obj[key].length==5) five.push(obj[key]);
    }
    return five;
}