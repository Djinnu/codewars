//my first solution: 
function createPhoneNumber(numbers){
    numbers.map(String)
    let result1 = '('
    let result2 = ') '
    let result3 = '-'
    for(let i = 0; i < numbers.length; i++) {
      if(i <= 2) {
        result1 += numbers[i]
      }
      else if (i <= 5) {
        result2 += numbers[i]
      } else {
        result3 += numbers[i]
      }
    }
    return result1 + result2 + result3
}

//better solution: 
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
}
  