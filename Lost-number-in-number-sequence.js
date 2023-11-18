//my solution:
function findDeletedNumber(arr, mixArr) {
    return arr.every(x => mixArr.includes(x)) ? 0 : arr.find(x => !mixArr.includes(x))
}
//other option:
function findDeletedNumber(arr, mixArr) {
    let arrSum = arr.reduce((a,b) => a + b, 0)
    let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
    return arrSum - mixArrSum
}
//clever option:
function findDeletedNumber(arr, mixArr) {
    return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
}