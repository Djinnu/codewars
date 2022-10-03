//my solution
function encode(string) {
    let obj = {
      'a': '1',
      'e': '2',
      'i': '3',
      'o': '4',
      'u': '5'
    }
    
    let newStr = string
    
    
    for (const entry in obj) {
      newStr = newStr.replace(new RegExp(entry, 'g'), obj[entry])
    }
    
    return newStr
  }
  
  function decode(string) {
    let obj = {
      '1': 'a',
      '2': 'e',
      '3': 'i',
      '4': 'o',
      '5': 'u'  
    }
    
    let newStr = string
    
    for(const [key, value] of Object.entries(obj)) {
      newStr = newStr.replace(new RegExp(key, 'g'), value)
    }
    
    return newStr
}


//another clever solution:
// turn vowels into numbers
function encode(string){
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
  }
  
  //turn numbers back into vowels
  function decode(string){
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}


//another option:
const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')