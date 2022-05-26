//my first solution:

function removeChar(str){
    let arr = str.split('')
    arr[0] = ''
    arr[arr.length-1] = ''
    return arr.join('')
};


//better solution:  return str.slice(1, -1)