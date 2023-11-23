function firstToLast(str,c){
    let firstPos = str.indexOf(c)
    let lastPos = str.lastIndexOf(c)
   
    return firstPos > -1 ? lastPos - firstPos : firstPos
}