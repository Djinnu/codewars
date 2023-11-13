function repeats(arr){
    return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((acc, c) => acc + c, 0)
};