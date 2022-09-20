//my solution:
var encryptThis = function(text) {
    return text.split(' ').map(x => x.split('').map((x,i,arr) => {
        if(i === 0) {
          return x = x.charCodeAt(i)
        } else if(i === 1) {
          return x = arr[arr.length-1]
        } else if(i === arr.length-1) {
          return x = arr[1]
        } else {
          return x
        }
      }).join('')
    ).join(' ')
}

//top solution: 
const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');
  
 //other solution:
 const encryptThis = s => s
  .split` `
  .map(e => e.charCodeAt() + (e.length > 1 ? (e.slice(-1) + (e.length > 2 ? `${e.slice(2, -1)}${e.slice(1, 2)}` : '')) : ''))
  .join` `; 