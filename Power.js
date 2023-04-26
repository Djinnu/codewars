function numberToPower(number, power){
    let solution = 1
    for(let i = 1; i <= power; i++) {
      solution *= number
    }
    return solution
}