//my first solution:

function logicalCalc(array, op){ 
    let arr = [array[0]]
    
    if(op === "AND") {
      if(array.includes(false)) {
        return false
      } else {
        return true
      }
    } else if(op === "OR") {
      for(let i = 1; i < array.length; i++) {
        if(arr[i-1] === false && array[i] === false) {
          arr.push(false)
        } else {
          arr.push(true)
        }
      }
      return arr[arr.length-1]
    } else if(op === "XOR") {
      for(let i = 1; i < array.length; i++) {
        if(array[i] === arr[i-1]) {
          arr.push(false)
        } else {
          arr.push(true)
        }
      }
      return arr[arr.length-1]
    }
  }

//better solution:
function logicalCalc(array, op)
{ 
  var result = array[0];
  for(var i = 1; i < array.length; i++)
  {
    if(op == "AND")
    {
      result = result && array[i];
    }
    if(op == "OR")
    {
      result = result || array[i];
    }
    if(op == "XOR")
    {
      result = result != array[i];
    }
  }
  return result;
}