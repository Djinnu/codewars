function playPass(s, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    return s.toLowerCase().split('').map((x,i) => {
      if(alphabet.includes(x)) {
        const index = alphabet.indexOf(x)
        return i % 2 === 0 ? x = alphabet[(index+n) % 26].toUpperCase() : x = alphabet[(index+n) % 26].toLowerCase()
      } else if(/[0-9]/.test(x)) {
        return x = 9 - Number(x)
      } else {
        return x
      }
    }).reverse().join('')
}