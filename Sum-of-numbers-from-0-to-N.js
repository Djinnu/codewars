var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      if(count === 0) return '0=0'
      if(count < 0) return `${count}<0` 
      let sum = 0
      let str = "0"
      for(let i = 1; i <= count; i++) {
        sum+=i
        str+= '+' + i
      }
      return str + " = " + sum
    };
  
    return SequenceSum;
  
})();