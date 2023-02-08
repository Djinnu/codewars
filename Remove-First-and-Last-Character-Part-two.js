//my solution:
function array(arr){ 
    let array = arr.split(',')
    
    if(array.length < 3) return null
    
    return array.filter((x,i) => i !== 0 && i !== array.length-1).join(" ")
}

//better solution:
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
}