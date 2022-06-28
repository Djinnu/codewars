//my first solution:
function pigIt(str){
    return str.split(' ').map(x => {
        let arr = x.split('')
        if(arr.some(x => /[^a-z]/gi.test(x))) {
            return arr
        } else {
            let firstLetter = [arr.shift() +'ay']
            return arr.concat(firstLetter).join('')
        }
    }).join(' ')
}

//better solution:
function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
}