//My solution:
function expandedForm(num) {
    let numStrArr = num.toString().split('')
    if(numStrArr.length > 1) {
      return numStrArr.map((x,i) => {
        if(x === '0') {
          return ""
        }else{
           while(x.length < numStrArr.length - i) {
            x = x+0
           }
           return x
        }
       }).filter(x => x !== "").join(' + ')
    }
    return num.toString()
}
//Better option: 
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
//another option:
function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
} 
//what i liked the most:
var expandedForm = (num) => {
    var arr = num.toString().split('').reverse();
    var result = [];
    for(var i = 0; i < arr.length; i++){
      arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
    }
    return result.reverse().join(' + ')
}