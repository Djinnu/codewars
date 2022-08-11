//my solution:
function inArray(array1,array2){
    let str = array2.join(' ')
    
    return array1.filter(x => str.includes(x)).sort()
}

//other option:
function inArray(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()
}