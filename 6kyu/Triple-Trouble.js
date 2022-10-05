//my solution:
function tripledouble(num1, num2) {
    let tripleTrouble
    let num1Arr = num1.toString().split('')
    let num2Str = num2.toString()
    
    
    for (let i = 0; i < num1Arr.length; i++) {
      if (num1Arr[i] === num1Arr[i+1] && num1Arr[i+1] === num1Arr[i+2]) {
        tripleTrouble = num1Arr[i] + num1Arr[i+1]
        if(num2Str.includes(tripleTrouble)) {
          return 1
        }
      } 
    }
    
    return 0
}


//regex solution:
function tripledouble(num1, num2) {
    for (let i = 0; i < 10; i++) {
      if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
        return 1;
      }
    }
    return 0;
}