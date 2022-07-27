//My first kind of bad solution:
function dirReduc(arr){
    let count = 0
    while(count <= arr.length) {
      if(arr[count] === "NORTH" && arr[count+1] === "SOUTH") {
        arr.splice(count, 2)
        count = 0
      } else if(arr[count] === "SOUTH" && arr[count+1] === "NORTH") {
        arr.splice(count, 2)
        count = 0
      } else if(arr[count] === "EAST" && arr[count+1] === "WEST") {
        arr.splice(count, 2)
        count = 0
      } else if(arr[count] === "WEST" && arr[count+1] === "EAST") {
        arr.splice(count, 2)
        count = 0
      } else {
        count++
      }
    }
     
    return arr
}

//More optimized solution:
function dirReduc(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
          arr[i] === "EAST" && arr[i+1] === "WEST" ||
          arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
          arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
          arr.splice(i, 2);
          count++;
          i--;
      }
    }
    return count === 0 ? arr : dirReduc(arr);
}
//Best solution i found: 
function dirReduc(arr) {
    var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)) str = str.replace(pattern,'');
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}