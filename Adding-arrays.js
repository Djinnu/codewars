function arrAdder(arr) {
    let str = ''
    for(let i = 0; i < arr[0].length; i++) {
      str += arr.map(x => x[i]).join('') + ' '
    }
    return str.trim()
}