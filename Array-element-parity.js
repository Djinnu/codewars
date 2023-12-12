function solve(arr){
    return arr.find(x => arr.indexOf(-x) === -1)
};