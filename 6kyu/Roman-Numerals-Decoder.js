//my first solution:
function solution (roman) {
    let romanNumerals = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1
    }
    
    
    let value = 0
    
    while(roman.length) {
      for(const elem in romanNumerals) {
        if(roman.startsWith(elem)) {
          value += romanNumerals[elem]
          roman = roman.replace(elem, "")
        }
      }
    } 
    
    return value
}

//more optimized solution:
function solution(roman){
    const Numerals = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    }
    
    let array = roman.split('');
    let sum = 0;
    
    for (let i=0; i<array.length; i++){                      //loop through roman numeral array
      if(Numerals[array[i]] < Numerals[array[i+1]]){         //special condition when number in front is less valuable than the next numeral
        sum += (Numerals[array[i+1]] - Numerals[array[i]]);  //subtract first element from second in these cases (IV, IX, XC, etc)
        i++;
      }else{
        sum += Numerals[array[i]];                           //add all the rest that don't meet above condition
      }
    }
    return sum;
}

//another option:
function solution(roman){
    var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    
    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
}