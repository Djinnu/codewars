//my first solution:
function comp(array1, array2){
    let sortedArr1, sortedArr2
    
    if(Array.isArray(array1) && Array.isArray(array2)) {
      sortedArr1 = array1.sort((a, b) => a - b)
      sortedArr2 = array2.map(x => Math.sqrt(x)).sort((a, b) => a - b)     
    } else {
      return false
    }
    
    for(let i = 0; i < sortedArr1.length; i++) {
        if(sortedArr1[i] !== sortedArr2[i]) {
            return false
        }
    }
    return true
}

//better one:
function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}