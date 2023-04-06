//my first solution:
function isPythagoreanTriple(integers) {
    let c = integers.splice(integers.indexOf(Math.max(...integers)), 1)
    let red = integers.reduce((acc, c) => acc + Math.pow(c, 2), 0)
    return Math.pow(c[0], 2) === red
}

//better solution:
function isPythagoreanTriple(integers) {
    let massiv = integers.sort((a, b) => a - b)
    return (massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2)
}