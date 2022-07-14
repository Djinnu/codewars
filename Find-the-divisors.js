function divisors(integer) {
    let arrOfDivisors = []
    for(let i = 2; i < integer; i++) {
      if(integer % i === 0) {
        arrOfDivisors.push(i)
      }    
    }
    return arrOfDivisors.length > 0 ? arrOfDivisors : `${integer} is prime`
};