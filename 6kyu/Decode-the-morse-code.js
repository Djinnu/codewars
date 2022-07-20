decodeMorse = function(morseCode){
    return morseCode.trim().split(' ').map(x => MORSE_CODE[x] || ' ').join('').replace(/\s+/g, " ")
}