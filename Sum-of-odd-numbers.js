//my first solution:
function rowSumOddNumbers(n) {
	let num = 1
    let arr = []
    while(num <= n*n + n) {
        arr.push(num)
        num += 2
    }

    let sliceReduce = arr.slice(-n).reduce((acc, c) => acc + c, 0)
    return sliceReduce
}
//A much efficient solution
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}