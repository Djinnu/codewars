function solution(number){
    let str = ""
    let romanNumeral = {
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
    
    for(const element of Object.keys(romanNumeral)) {
      let x = Math.floor(number / romanNumeral[element])
      number -= x*romanNumeral[element]
      str += element.repeat(x)
    }
    return str
}