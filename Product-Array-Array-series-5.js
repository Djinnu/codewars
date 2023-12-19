function productArray(numbers){
    let output = []
    let red = numbers.reduce((acc, c) => acc * c, 1)
    
    numbers.forEach(x => {
      output.push(red/x)
    })
    
    return output
}