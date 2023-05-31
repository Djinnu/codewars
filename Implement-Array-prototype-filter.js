//my solution:
Array.prototype.filter = function (func) {
    let arr = []
    
    this.forEach(x => {
      if(func(x)) {
        arr.push(x)
      } 
    })  
    
    return arr
}

//other option:
Array.prototype.filter = function(fn){
    var res = [];
    for (var i = 0; i<this.length; i++){
      if (fn(this[i])){
        res.push(this[i]);
      }
    }
    return res;
}