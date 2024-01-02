//my solution:
function vowel2index(str) {
    return str.split('').map((x, i) => x.replace(/[aeiou]/i, i+1)).join('')
}

//better one:
function vowel2index(str) {
    return str.replace(/[aeiou]/ig, (m, i) => i + 1);
}
  