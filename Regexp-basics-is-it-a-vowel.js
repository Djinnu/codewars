//my solution:
String.prototype.vowel = function() {
    let vowels = 'aeiou'.split('')
    
    return vowels.includes(this.toLowerCase());
};

//better one:
String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this)
}