function findDup( arr ){
    return arr.find(x => arr.indexOf(x) !== arr.lastIndexOf(x))
}