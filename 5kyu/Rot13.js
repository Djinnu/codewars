//my solution:
function rot13(message){
    let arr = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let regex = /[a-z]/i
    let newArr = message.split('').map(x => {
      if(regex.test(x)) {
        if(x === x.toUpperCase()) {
          x = x.toLowerCase()
          x = arr[(arr.indexOf(x) + 13) % 26]
          return x = x.toUpperCase()
        } else {
          return x = arr[(arr.indexOf(x) + 13) % 26]
        }
      } else {
        return x
      }
    })
    return newArr.join('')
}

//another option:
function rot13(message) {
    var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}