//my first solution:
function removeConsecutiveDuplicates(string) {
    let arr = string.split(' ')
    let output = []
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i+1] !== arr[i]) {
        output.push(arr[i])
      }
    }
    
    return output.join(' ');
}

//better solution: 
const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");