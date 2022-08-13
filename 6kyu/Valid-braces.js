//my simple solution:
function validBraces(braces){
    while(braces.length > 1) {
      if(braces.includes('()')) {
        braces = braces.replace('()', "")
      } else if(braces.includes('[]')) {
        braces = braces.replace('[]', "")
      } else if(braces.includes('{}')) {
        braces = braces.replace('{}', "")
      } else {
        return false
      }
    }
  
    return braces.length === 0    
}

//better option:
function validBraces(braces){
    var matches = { '(':')', '{':'}', '[':']' };
    var stack = [];
    var currentChar;
  
    for (var i=0; i<braces.length; i++) {
      currentChar = braces[i];
  
      if (matches[currentChar]) { // opening braces
        stack.push(currentChar);
      } else { // closing braces
        if (currentChar !== matches[stack.pop()]) {
          return false;
        }
      }
    }
  
    return stack.length === 0; // any unclosed braces left?
}

//or:
function validBraces(str){
    var prev = "";
    while (str.length != prev.length) {
              prev = str;
              str = str
                  .replace("()", "")
                  .replace("[]", "")
                  .replace("{}", "");                
      }
      return (str.length === 0);
}