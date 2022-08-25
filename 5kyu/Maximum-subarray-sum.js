//my solution:
var maxSequence = function(arr){
    let maxSum = 0
   
    for(let i = 0; i <= arr.length - 1; i++) {
      for(let j = 1; j <= arr.length -1; j++) {
        let value = arr.slice(i, j+1).reduce((acc, c) => acc + c, 0)
        if(value > maxSum) {
          maxSum = value
        }
      }
    }
    
    return maxSum
}

//another option:
var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
}
