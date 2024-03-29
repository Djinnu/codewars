//my solution:
function dataReverse(data) {
    let arr = []
    
    while(data.length) {
      let segment = data.splice(0, 8)
      arr.push(segment)
    }
    
    return arr.reverse().flat()
}

//top solution:
const dataReverse = data => {
    const bytes = [];
    for (let i = 0; i < data.length; i += 8) {
      bytes.unshift(...data.slice(i, i + 8));
    }
    return bytes;
};