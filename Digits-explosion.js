function explode(s) {
    return s.split('').map(x => Array(Number(x)).fill(x).join('')).join('')
}