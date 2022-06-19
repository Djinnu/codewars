//my first solution:
function duplicateCount(text){
    let arr = text.toLowerCase().split('')
    result = []
    for(let i = 0; i < arr.length; i++) {
      if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]))
        result.push(arr[i])
    }
    let set = new Set(result)
    return Array.from(set).length
}
//another option:
function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}