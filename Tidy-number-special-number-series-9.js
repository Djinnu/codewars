function tidyNumber(n){
    let sorted = n.toString().split('').sort((a, b) => a - b).join('')
    
    return n == sorted
}