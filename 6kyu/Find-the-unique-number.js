//My first solution:
function findUniq(arr) {
    return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))[0]
}
//Better solution:
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}