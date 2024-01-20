function swap (string) {
    let vowels = 'aeiou'.split('')
    return string.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');
}