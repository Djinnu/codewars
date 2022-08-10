//my solution:
function stray(numbers) {
    return Number(numbers.filter(x => numbers.indexOf(x) === numbers.lastIndexOf(x)))
}

//better option:
const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));