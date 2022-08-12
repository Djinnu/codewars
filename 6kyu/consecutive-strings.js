//my solution:
function longestConsec(strarr, k) {   
    let newArr = strarr.map((x, i) => x = strarr.slice(i, i+k).join(''))
    let lengthArr = newArr.map(x => x.length)
    let index = lengthArr.indexOf(Math.max(...lengthArr))
    
    if(strarr.length === 0 || k > strarr.length || k <= 0) {
      return ''
    } else {
      return newArr[index]
    }
}


//option i liked best:
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}

//another option:
function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
      return "";
    }
    
    return strarr
    .map((value, index) => (
      strarr.slice(index, index+k).join('')
    ))
    .reduce((longest, current) => current.length > longest.length ? current : longest)
    
}
