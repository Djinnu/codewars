function multiTable(number) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    return arr.map(x => `${x} * ${number} = ` + (x * number)).join("\n")
}