const divisibleByThree = (str) => {
    const num = [...str].reduce((a, b)=> +a + +b, 0)
    return parseInt(num/3) === num/3
}