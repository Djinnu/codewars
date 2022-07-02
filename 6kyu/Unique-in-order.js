//my first solution:
var uniqueInOrder=function(iterable){
    if(typeof(iterable) === 'string') {
      return iterable.split('').filter((x,i,arr) => arr[i] === x && arr[i+1] !== x)
    } else {
      return iterable.filter((x,i,arr) => arr[i] === x && arr[i+1] !== x)
    }
}

//more compact solution: 
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}