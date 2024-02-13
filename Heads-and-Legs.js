//my solution

function animals(heads, legs){
    if(heads === 0 && legs === 0) return [0, 0]
    if(legs <= 0 || heads <= 0) return "No solutions"
    
    let chickens = (heads - (legs / 4)) * 2
    let cows = heads - chickens
    
    if(chickens % 1 !== 0 || chickens < 0 || chickens > heads) return "No solutions"
    
    return [chickens, cows]
}

//better solution:
function animals(heads, legs) {
    const cows = legs / 2 - heads;
    const chickens = heads - cows;
    
    if (legs & 1 || chickens > heads || cows > heads)
      return "No solutions";
    else
      return [chickens, cows];
}