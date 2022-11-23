function expressionMatter(a, b, c) {
    let solution1 = a * (b + c) 
    let solution2 = a * b * c
    let solution3 = a + b * c 
    let solution4 = (a + b) * c
    let solution5 = a + b + c
    
    return Math.max(solution1, solution2, solution3, solution4, solution5)
}